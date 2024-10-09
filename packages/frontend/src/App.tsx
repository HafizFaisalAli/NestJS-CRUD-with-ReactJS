import { useQuery } from '@tanstack/react-query';
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools';
import { useState } from 'react';

const fetchData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  return res.json();
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, error } = useQuery({
    queryKey: ['todo'],
    queryFn: fetchData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {`${isOpen ? 'Close' : 'Open'} the devtools panel`}
      </button>
      {isOpen && <ReactQueryDevtoolsPanel onClose={() => setIsOpen(false)} />}
      <h1>Todo Item</h1>
      <div>
        {data?.map((item: any) => (
          <ul key={item.id}>
            <li>{item?.title}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default App;
