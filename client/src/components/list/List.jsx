import './List.scss';
import {listData} from '../../lib/dummyData';
import Card from '../card/Card'

export default function List() {
  return (
    <div className='list'>
      {listData.map((item)=>(
        <Card key={item.id} item={item} />
      ))}
    </div>
  )
}
