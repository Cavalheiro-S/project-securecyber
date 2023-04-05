import { Trash } from '@phosphor-icons/react'
import { useContext, useEffect } from 'react'
import { Header } from '../../components/Header/Header'
import { Heading } from '../../components/Heading/Heading'
import { Loading } from '../../components/Loading/Loading'
import { Text } from '../../components/Text/Text'
import { NoticeContext } from '../../contexts/NoticeContext'
import { QueryNotice } from '../../utils/data'
import { Form } from './components/Form'
import { truncateTextWithDots } from '../../utils/Text'


export const Notice = () => {

    const { removeNotice, notices, loading, loadNotice, setLoading } = useContext(NoticeContext);

    useEffect(() => {
        loadNotice();
    }, [])

    const renderNotice = (notice: QueryNotice, index: number) => {

        return (
            <div key={notice._id + index} className='flex md:flex-row flex-col items-center justify-between gap-6'>
                <div className='flex flex-col md:flex-row  flex-1 gap-2 md:h-24'>
                    <div className='md:w-[160px]'>
                        <img src={notice.image.asset.url} className='h-full w-full aspect-square rounded' />
                    </div>
                    <div className='flex flex-1 flex-col gap-2'>
                        <Text className='font-bold'>{notice.title}</Text>
                        <Text>{truncateTextWithDots(notice.description, 100)}</Text>
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
            <section className='flex md:block md:items-center px-4 md:px-40 min-h-screen md:h-[90vh]'>
                {loading ? <Loading className='w-full h-full' /> : (
                    <div className='max-w-3xl w-full mx-auto'>
                        <div className='flex flex-col md:flex-row justify-between items-start gap-2 w-full'>
                            <div className='flex flex-col gap-2'>
                                <Heading className='text-3xl'>
                                    Noticias Adicionadas
                                </Heading>
                                <Text className='text-lg text-start '>{notices.length ?? 0}/10 adicionadas</Text>
                            </div>
                            <Form />
                        </div>
                        <div className='flex flex-col gap-6 py-8'>
                            {notices.length > 0 && notices.map(renderNotice)}
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}
