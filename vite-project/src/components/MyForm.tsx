import { useState } from 'react'
import { useForm } from 'react-hook-form';

type Inputs = {
  weight: number;
}

const MyForm = () => {
  const [quantity, setQuantity] = useState<number>();
  const [notification, setNotification] = useState<string | null>(null);
  const { register, handleSubmit } = useForm<Inputs>();
  
  const onSubmit = (data: Inputs, event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isNaN(data.weight)) {
      setNotification(null);
      const waterQuantity = +data.weight * 2.2 * 30 / 2;
      setQuantity(waterQuantity);
    } else {
      setNotification('กรุณาใส่ตัวเลข');
    }
  }
  
  return (
    <>
      <h2><b className='quantity'>{quantity?.toFixed(2) || 'xx'}</b> มิลลิลิตร</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("weight")} />
        <div>{ notification }</div>
        <input type="submit" value="submit" />
      </form>
    </>
  )
}

export default MyForm