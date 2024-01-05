
import SimpleTable from './components/SimpleTable'
import data from "./MOCK_DATA.json";
import dayjs from "dayjs";

function App() {

  const columns = [
    {
      header: "ID",
      accessorKey: "id",
      footer: "Mi ID",
    },
    {
      header: "Nombres Completos",
      columns: [
        {
          header: "Name",
          accessorKey: "name",
          footer: "Mi nombre",
        },
        {
          header: "Lastname",
          accessorKey: "lastname",
          footer: "Mi apellido",
        },
      ],
      footer: "Mis nombres completos"
    },

    {
      header: "Email",
      accessorKey: "email",
      footer: "Mi email",
    },
    {
      header: "Country",
      accessorKey: "country",
      footer: "Mi pais",
    },
    {
      header: "Day of Birth",
      accessorKey: "dateOfBirth",
      footer: "Mi fecha de nacimiento",
      cell: (info) => dayjs(info.getValue()).format("DD/MM/YYYY"),
    },
  ];

  return (
    <div>
      <SimpleTable data={data} columns={columns} />
    </div>
  )
}

export default App
