export interface QueryNotice {
    _id: string;
    title: string;
    description: string;
    image: {
        asset: {
            _id: string;
            url: string;
        }
    }
}


const queryNotice = () => {
    const query = `*[_type == "notice"]{
        _id,
        title,
        description,
        image {
            asset-> {
                _id,
                url
            }
        }
    }`;
    return query;
}

export { queryNotice }