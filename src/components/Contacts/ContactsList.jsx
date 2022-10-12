import PropTypes from 'prop-types';
import { ContactListItem } from './ContactItem';
import css from './Contacts.module.css';

export const ContactList = ({ contactList, onDelete }) => {
  return (
    <ul className={css.list}>
      {contactList.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onDelete={onDelete}
          id={id}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};