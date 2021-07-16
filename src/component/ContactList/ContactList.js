import PropTypes from "prop-types";
import { connect } from "react-redux";
import style from "./ContactList.module.scss";
import * as actions from "../../redux/contacts/contacts-actions";

const ContactList = ({ deleteContact, filter, contacts }) => {
  const filteredArrayContact = () => {
    const filterValue = filter.toLowerCase();

    const filterText = (value) => value.toLowerCase().includes(filterValue);

    return contacts.filter(({ name }) => filterText(name));
  };

  return (
    <ul className={style.list}>
      {filteredArrayContact().map(({ name, number, id }) => (
        <li className={style.listItem} key={id}>
          <p className={style.name}>
            {name}: <span className={style.number}>{number}</span>
          </p>
          <button
            className={style.button}
            type="button"
            onClick={() => deleteContact(id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  filter: state.contacts.filter,
  contacts: state.contacts.items,
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
