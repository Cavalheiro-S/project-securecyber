import { Trash } from '@phosphor-icons/react'
import { useContext, useEffect } from 'react'
import { Header } from '../../components/Header/Header'
import { Heading } from '../../components/Heading/Heading'
import { Loading } from '../../components/Loading/Loading'
import { Text } from '../../components/Text/Text'
import { NoticeContext } from '../../contexts/NoticeContext'
import { QueryNotice } from '../../utils/data'
import { Form } from './components/Form'


export const Notice = () => {

    const { removeNotice, notices, loading, loadNotice, setLoading } = useContext(NoticeContext);

    useEffect(() => {
        loadNotice();
    }, [])

    const renderNotice = (notice: QueryNotice, index: number) => {

        return (
            <div key={notice._id + index} className='flex items-center justify-between gap-6'>
                <div className='flex gap-2 h-24'>
                    <div className='w-[160px]'>
                        <img src={notice.image.asset.url} className='h-full w-full aspect-square rounded' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Text className='font-bold'>{notice.title}</Text>
                        <Text>{notice.description}</Text>
                    </div>
                </div>
                <div onClick={() => removeNotice(notice)}
                    className='flex items-center justify-center p-2 rounded-full bg-white hover:bg-red-500 group transition'>
                    <Trash className='text-gray-800 w-6 h-6 group-hover:text-white' />
                </div>
            </div>
        )
    }

    return (
        <>
            <Header />
            <section className='px-40 h-[90vh]'>
                {loading ? <Loading className='h-full'/> : (
                    <div className='max-w-3xl mx-auto'>
                        <div className='flex justify-between items-start '>
                            <div className='flex flex-col gap-2'>
                                <Heading className='text-3xl'>
                                    Noticias Adicionadas
                                </Heading>
                                <Text className='text-lg'>{notices.length ?? 0}/10 adicionadas</Text>
                            </div>
                            <Form />
                        </div>
                        <div className='flex flex-col gap-6 py-4'>
                            {notices.length > 0 && notices.map(renderNotice)}
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}
