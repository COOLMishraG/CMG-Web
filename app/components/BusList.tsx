export interface Bus {
  id: string;
  name: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
}

interface BusListProps {
  buses: Bus[];
  searched: boolean;
}

export const demoBuses: Bus[] = [
  {
    id: '1',
    name: 'Express Bus',
    from: 'Bhopal',
    to: 'New Delhi',
    departureTime: '06:00',
    arrivalTime: '14:30',
    price: 1200,
  },
  {
    id: '2',
    name: 'Intercity Bus',
    from: 'Indore',
    to: 'Mumbai',
    departureTime: '08:30',
    arrivalTime: '20:00',
    price: 800,
  },
  {
    id: '3',
    name: 'Luxury Bus',
    from: 'Jabalpur',
    to: 'Kolkata',
    departureTime: '22:00',
    arrivalTime: '10:30',
    price: 1500,
  },
  {
    id: '4',
    name: 'Sleeper Bus',
    from: 'Chennai',
    to: 'Bengaluru',
    departureTime: '15:00',
    arrivalTime: '21:30',
    price: 1000,
  },
  {
    id: '5',
    name: 'Economy Bus',
    from: 'Ahmedabad',
    to: 'Pune',
    departureTime: '23:30',
    arrivalTime: '11:00',
    price: 600,
  },
];

export default function BusList({ buses, searched }: BusListProps) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-[#1C1678]">
        {searched ? "Available Buses" : "All Buses"}
      </h2>
      {buses.length === 0 ? (
        <p className="text-[#1C1678]">No buses available for the selected route and date.</p>
      ) : (
        <ul className="space-y-4">
          {buses.map((bus) => (
            <li key={bus.id} className="border p-4 rounded bg-white">
              <h3 className="font-bold text-[#1C1678]">{bus.name}</h3>
              <p className="text-[#1C1678]">From: {bus.from} - To: {bus.to}</p>
              <p className="text-[#1C1678]">Departure: {bus.departureTime}</p>
              <p className="text-[#1C1678]">Arrival: {bus.arrivalTime}</p>
              <p className="text-[#1C1678]">Price: ₹{bus.price}</p>
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