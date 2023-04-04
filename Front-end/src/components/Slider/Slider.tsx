
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { useContext } from "react";
import { NoticeContext } from "../../contexts/NoticeContext";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { truncateTextWithDots } from "../../utils/Text";
import { QueryNotice } from "../../utils/data";
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';

export const Slider = () => {

    const { width } = useWindowDimensions();
    const { notices } = useContext(NoticeContext);

    const renderNotice = (notice: QueryNotice) => {
        return (
            <SplideSlide key={notice._id}>
                <div className='h-20 custom-wrapper gap-2'>
                    <SplideTrack className="flex h-full">
                        <img src={notice.image.asset.url} className="h-full rounded" alt="" />
                        <div className='flex flex-col h-full ml-2 justify-center overflow-hidden'>
                            <Heading className='text-lg'>{notice.title}</Heading>
                            <Text>{truncateTextWithDots(notice.description, width > 768 ? 100 : 20)}</Text>
                        </div>
                    </SplideTrack>
                </div>
            </SplideSlide>
        )

    }
    return (
        <Splide
            className="bg-background py-4"
            options={{
                type: "loop",
                gap: "10px",
                arrows: false,
                pagination: false,
                perPage: width > 768 ? 3 : 1,
                autoScroll: {
                    pauseOnHover: true,
                    pauseOnFocus: false,
                    rewind: false,
                    speed: 1
                }
            }}
            extensions={{ AutoScroll }}
        >
            {notices.map(renderNotice)}
        </Splide>
    )
}


