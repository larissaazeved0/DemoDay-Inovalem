export const userColumns = [{ field: 'id', headerName: 'ID', width: 70 }, {
  field: "user", headerName: "Cliente", width: 230, renderCell: (params) => {
    return (
      <div className="cellWithImg">
        <img className="cellImg" src={params.row.img} alt="avatar" />
        {params.row.username}
      </div>
    );
  },
},
{
  field: "email", headerName: "Email", width: 230,
},
{
  field: "idade", headerName: "Idade", width: 100,
},
{
  field: "status", headerName: "Status", width: 160, renderCell: (params) => {
    return (
      <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
    )
  }
},
];

export const userRows = [
  {
    id: 1,
    username: "João Conrado",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "Ativo",
    email: "JoaoSConrado@gmail.com",
    idade: 18,
  },
  {
    id: 2,
    username: "Larissa Azevedo",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Azevedo.larissa861@gmail.com",
    status: "Passivo",
    idade: 21,
  },
  {
    id: 3,
    username: "Eduardo Oliveira",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "contato.eduoliveira.c@gmail.com",
    status: "Pendente",
    idade: 19,
  },
  {
    id: 4,
    username: "André Angelim",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "andrepalhares011@gmail.com",
    status: "Ativo",
    idade: 20,
  },
  {
    id: 5,
    username: "Nicolly",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "nicolly.gabriele128@gmail.com",
    status: "Passivo",
    idade: 18,
  },
  {
    id: 6,
    username: "Luana Andrade",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3luanaandrade@gmail.com",
    status: "Ativo",
    idade: 19,
  },
  {
    id: 7,
    username: "Lara Rufino",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "lara.rufino17@gmail.com",
    status: "Passivo",
    idade: 18,
  },
  {
    id: 8,
    username: "Mayara",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "mayararodriguesmarques2003@gmail.com",
    status: "Ativo",
    idade: 18,
  },
];