export interface Train {
  id: string;
  name: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
}

interface TrainListProps {
  trains: Train[];
  searched: boolean;
}

export const demoTrains: Train[] = [
  {
    id: '1',
    name: 'Shatabdi Express',
    from: 'Bhopal',
    to: 'New Delhi',
    departureTime: '06:00',
    arrivalTime: '14:30',
    price: 1200,
  },
  {
    id: '2',
    name: 'Intercity Express',
    from: 'Indore',
    to: 'Mumbai',
    departureTime: '08:30',
    arrivalTime: '20:00',
    price: 800,
  },
  {
    id: '3',
    name: 'Rajdhani Express',
    from: 'Jabalpur',
    to: 'Kolkata',
    departureTime: '22:00',
    arrivalTime: '10:30',
    price: 1500,
  },
  {
    id: '4',
    name: 'Duronto Express',
    from: 'Chennai',
    to: 'Bengaluru',
    departureTime: '15:00',
    arrivalTime: '21:30',
    price: 1000,
  },
  {
    id: '5',
    name: 'Garib Rath',
    from: 'Ahmedabad',
    to: 'Pune',
    departureTime: '23:30',
    arrivalTime: '11:00',
    price: 600,
  },
];

export default function TrainList({ trains, searched }: TrainListProps) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-[#1C1678]">
        {searched ? "Available Trains" : "All Trains"}
      </h2>
      {trains.length === 0 ? (
        <p className="text-[#1C1678]">No trains available for the selected route and date.</p>
      ) : (
        <ul className="space-y-4">
          {trains.map((train) => (
            <li key={train.id} className="border p-4 rounded bg-white">
              <h3 className="font-bold text-[#1C1678]">{train.name}</h3>
              <p className="text-[#1C1678]">From: {train.from} - To: {train.to}</p>
              <p className="text-[#1C1678]">Departure: {train.departureTime}</p>
              <p className="text-[#1C1678]">Arrival: {train.arrivalTime}</p>
              <p className="text-[#1C1678]">Price: ₹{train.price}</p>
              <button className="mt-2 px-4 py-2 bg-[#7BC9FF] text-[#1C1678] rounded hover:bg-[#F4FF7B]">
                Select
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}