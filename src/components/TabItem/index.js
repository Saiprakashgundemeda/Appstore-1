// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItemDetails, updateTabItem, isActive} = props
  const {tabId, displayText} = tabItemDetails

  const updateTabItemId = () => {
    updateTabItem(tabId)
  }
  const activeTabClassName = isActive ? 'styled-btn' : ''

  return (
    <li className="list-item">
      <button
        className={`tabButton ${activeTabClassName}`}
        type="button"
        onClick={updateTabItemId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
