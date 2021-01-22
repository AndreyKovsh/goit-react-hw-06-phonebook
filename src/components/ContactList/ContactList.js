import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';
import { getVisibleContacts, getContacts } from '../../redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(getVisibleContacts);
  const contacts = useSelector(getContacts);

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            <b>{name} </b>
            <em>{number}</em>
          </p>
          <button type="button" onClick={() => dispatch(deleteContact(id))}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
// function ContactList({ contacts, onDeleteContact }) {
//   return (
//     <ul>
//       {contacts.map(({ id, name, number }) => (
//         <li key={id}>
//           <p>
//             <b>{name} </b>

//             <em>{number}</em>
//           </p>
//           <button type="button" onClick={() => onDeleteContact(id)}>
//             Удалить
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default ContactList;
