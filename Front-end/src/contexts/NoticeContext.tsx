import { SanityDocumentStub } from "@sanity/client";
import React, { ReactNode, createContext, useEffect, useState } from "react";
import { client, urlFor } from "../utils/client";
import { QueryNotice, queryNotice } from "../utils/data";

interface NoticeContextType {
    notices: QueryNotice[];
    setNotices: React.Dispatch<React.SetStateAction<QueryNotice[]>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    addNotice: (title: string, description: string, imageId: string) => Promise<void>;
    removeNotice: (notice: QueryNotice) => Promise<void>;
    loadNotice: () => Promise<void>;
}

interface NoticeProviderProps {
    children: ReactNode;
}

export const NoticeContext = createContext<NoticeContextType>({} as NoticeContextType);

export const NoticeProvider = ({ children }: NoticeProviderProps) => {

    const [notices, setNotices] = useState<QueryNotice[]>([] as QueryNotice[]);
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        const subscribe = client
            .listen<QueryNotice>(queryNotice())
            .subscribe((data) => {
                if (data.result) {
                    const newNotice: QueryNotice = {
                        _id: data.result._id,
                        description: data.result.description,
                        title: data.result.title,
                        image: {
                            asset: {
                                _id: data.result.image.asset._id,
                                url: urlFor(data.result.image).url()

                            }
                        }
                    }

                    setNotices(prev => [...prev, newNotice]);
                }
                else
                    setNotices(prev => prev.filter(notice => notice._id !== data.documentId))
            })

        return () => subscribe.unsubscribe();
    }, [])


    useEffect(() => {
        loadNotice();
    }, [])

    const addNotice = async (title: string, description: string, imageId: string) => {
        setLoading(true);
        const doc: SanityDocumentStub = {
            _type: "notice",
            title: title,
            description: description,
            image: {
                _type: 'image',
                asset: {
                    _type: 'reference',
                    _ref: imageId
                }
            }
        }
        await client.create(doc);
        setLoading(false);
    }

    const removeNotice = async (notice: QueryNotice) => {
        try {
            setLoading(true);
            await client.delete(notice._id);
            await client.delete(notice.image.asset._id);
            setNotices(prev => prev.filter(n => n._id !== notice._id));
        }
        catch (e) {
            console.log(e);
        }
        finally {
            setLoading(false);
        }
    }


    const loadNotice = async () => {
        setLoading(true);
        const query = queryNotice();
        const noticesData = await client.fetch<QueryNotice[]>(query)
        setNotices(noticesData);
        setLoading(false);
    }

    const state = {
        notices,
        setNotices,
        addNotice,
        removeNotice,
        loadNotice,
        loading,
        setLoading
    }

    return (
        <NoticeContext.Provider value={state}>
            {children}
        </NoticeContext.Provider>
    )
};