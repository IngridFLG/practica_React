import PropTypes  from "prop-types";
import { Title } from "./components/Title";
import { UserDetails } from "./components/UserDetails";
import { Book } from "./components/Book";

export const HelloWorldApp = ({user, id, title, book}) => {
    console.log(title);
    //   const name = 'pepe';
      return (
        <>
          <Title title = 'Hola mundo'/>
          <UserDetails user = {user} id = {id} />
          <Book book = {book}/>
        </>
      );
    }

    HelloWorldApp.propTypes = {
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        user: PropTypes.object.isRequired,
        book: PropTypes.string.isRequired
    }

    HelloWorldApp.defaultProps = {
        title: 'Hola mundo por defecto',
        book: 'UML go a gota'
    }

// export function HelloWorld({user, id}) {

// //   const name = 'pepe';
//   return (
//     <>
//       <h1>Hola mundo</h1>
//       <div>que tal {user} con el id {id}</div>
//     </>
//   );
// }
