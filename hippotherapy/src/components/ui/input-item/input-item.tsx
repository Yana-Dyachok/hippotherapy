import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import styles from './input-item.module.scss';

const InputItem = <T extends FieldValues>({
  error,
  register,
  name,
  placeholder,
  type,
}: {
  name: string;
  type: string;
  label?: string;
  register?: UseFormRegister<T>;
  error?: string;
  placeholder?: string;
}) => {
  const { t } = useTranslation();
  return (
    <label htmlFor={name} className={styles.inputWrapper}>
      <input
        type={type}
        {...(register ? register(name as Path<T>) : {})}
        name={name}
        className={`${styles.input} ${error === '' ? '' : styles.errorInput}`}
        placeholder={placeholder}
      />
      <span className={styles.errorMessage}>{error ? t(error) : ''}</span>
    </label>
  );
};

export default InputItem;
