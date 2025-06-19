import { useEffect, useState } from 'react';
import axios from 'axios';
import './Header.css';
import Button from './Button.jsx'
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function Header(props) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  //useEffect(() => {
  const retrieve = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios(
        'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_gRwz9XRruyeCh9qJHrNBpj1E69QrxxK4UFwAWnEIJ4d19K6GmfskP8IwL5GDdQ6H'
      );
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  //retrieve();
  // }, []);

  useEffect(() => {
    retrieve();
  }, [])

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;

  return (
    <div className='header-wrapper'>
      <h3>{props.name} Cats</h3>
      <p>
        The Bengal cat is a breed of hybrid cat created from crossing of an Asian leopard cat with domestic cats, especially the spotted Egyptian Mau.
        <em> Origin:</em> United States
        <em> Temperament:</em> Curious, Friendly, Affectionate, Alert, Confident, Dependable
      </p>
      <Button onClick={retrieve}>Refresh Gallery</Button>
      <ul className="cat-list">
        {data.map((res, idx) => (
          <li key={idx} className="card">
            <Zoom>
              <img src={res.url} width={200} alt="Bengal Cats posing" />
            </Zoom>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;


