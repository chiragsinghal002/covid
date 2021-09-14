import React,{useState,useEffect} from 'react'

export default function Preloader() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout((e) => {
            setLoading(false);
        }, 2000)

    }, [])
    return (
       <>
             {
                    loading ?
                        <>
                            <div className="preloader"></div>
                        </>
                        :
                        <>
                        </>
                }
       </>
    )
}
