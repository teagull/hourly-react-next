const Page = () => {
  const fultTime = new Intl.DateTimeFormat('pt-BR', {
    timeStyle: 'short',
    hour12: false
  }).format();

  const hour = new Date().getHours();
  let greeting = '';

  if (hour >=  0 && hour < 12 ) {
    greeting = 'Bom dia 🤩';
  } else if(hour >= 12 &&  hour < 18) {
    greeting = 'Boa Tarde 😄';
  } else if (hour >=18 && hour <= 23) {
    greeting = 'Boa Noite 😴';
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-white
    bg-gradient-to-r from-sky-500 to-indigo-500">
        <div className="text-9xl ">{fultTime}</div>
        <div className="text-5xl font-bold">{greeting}</div>
    </div>
  );



}
export default Page;