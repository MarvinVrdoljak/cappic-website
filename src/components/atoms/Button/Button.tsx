import styles from './Button.module.scss'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({ children, onClick, type = 'button' }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {children}
    </button>
  )
}
