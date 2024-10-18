import React, {useState, useEffect} from 'react'
import { fetchPosts } from '../api/post';
import Pagination from './Pagination';
import TableComponent from './Table';

interface Post {
    id: number;
    title: string;
    body: string;
  }

const List:React.FC = () => {
    const [data, setData] = useState<Post[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage] = useState<number>(10);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const headers = ['id', 'title', 'body'];

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const posts = await fetchPosts();
          setData(posts);
        } catch (error) {
          console.error("Error fetching data", error);
        }
      };
      
      fetchData();
    }, []);

  return (
    <div className="container">
      <h1>Paginated Results</h1>
      <TableComponent headers={headers} data={currentItems} />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        paginate={paginate}
      />
    </div>
  )
}

export default List
