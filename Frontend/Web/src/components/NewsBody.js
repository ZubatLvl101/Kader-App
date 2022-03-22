import styles from '../styles/components/NewsBody.module.css';
import { newsDaten } from '../data/data';
import { Badge } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const NewsBody = ({}) => {
    
    /*useEffect(() => {
        
        async function fetchData() {
            const news = await fetchNews();
            setNews(news);
        }

        fetchData();

    }, []);

    const fetchNews = async () => {
        const res = await fetch(`http://localhost:5000/api/news/${id}`);
        return res.json();
    }*/
    
    return (    
        <div>      
            {newsDaten.map((element,idx) => (
                <Card className={`mt-2 ${styles.bg}`}>
                <div className="d-flex ">
                    <div className={`px-3 d-flex flex-column justify-content-between ${styles.info}`}>
                        <h5 className={styles.description}>{element.überschrift}</h5>
                        <p className={styles.description}> {element.text} </p>
                        <div className='mb-1'>
                            <Badge bg="dark" >{element.ersteller}</Badge>
                            <Badge bg="dark" >{element.erstellDatum}</Badge>
                        </div>
                    </div>
                </div>
            </Card>
            ))}
        </div>  
    );
}

export default NewsBody;