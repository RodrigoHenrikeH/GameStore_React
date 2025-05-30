import margicarp from '../assets/img/banner.png';

export default function Banner() {
  return (
    <div className="h-[300px] w-full bg-gray-950 flex justify-around items-center">
      <div>
        <p className='text-white text-5xl'>
          “Eu juro por arceus, que
        </p>
        <p className='text-white text-5xl'>
          quando eu evoluir vou
        </p>
        <p className='text-white text-5xl'>
          matar todos voces”
        </p>
        <span className='text-white text-1xl italic'>Margikarp</span>
      </div>
      <img className='w-[350px]' src={margicarp} alt="" />
    </div>
  )
}
