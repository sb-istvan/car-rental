import { ErrorIcon } from '../assets/svgs'

export default function ErrorMessage({ message }) {
  return (
    <>
      {message && (
        <div className="error-message">
          <ErrorIcon />
          <p>{message}</p>
        </div>
      )}
    </>
  )
}
