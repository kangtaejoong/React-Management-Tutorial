import './App.css';
import Customer from './components/Customer';

function App() {

  const customer = [
    {
      'id' : 1,
      'image' : 'https://placeimg.com/64/64/1',
      'name' : '홍길동',
      'birthday' : '911111',
      'gender' : '남자',
      'job' : '대학생'
    },
    {
      'id' : 2,
      'image' : 'https://placeimg.com/64/64/2',
      'name' : '이순신',
      'birthday' : '911111',
      'gender' : '남자',
      'job' : '장군'
    },
    {
      'id' : 3,
      'image' : 'https://placeimg.com/64/64/3',
      'name' : '박경림',
      'birthday' : '911111',
      'gender' : '여자',
      'job' : '일반인'
    }
  ]

  return (
    <div>
      {customer.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> )})}
    </div>
  );
}

export default App;
