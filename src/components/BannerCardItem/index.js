// Write your code here.
import './index.css'

const BannerCard = props => {
  const {details} = props
  const {headerText, description, className} = details
  console.log(details)
  return (
    <li className={className}>
      <div>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button type="button">Show More</button>
      </div>
    </li>
  )
}
export default BannerCard
