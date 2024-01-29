// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="list-container">
      <img src={imageUrl} alt={appName} className="appItemImage" />
      <p className="appName">{appName}</p>
    </li>
  )
}

export default AppItem
