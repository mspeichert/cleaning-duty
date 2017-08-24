import { connect } from 'react-redux'
import NavbarItem from '../../components/NavbarItem/NavbarItem'

// Just an overlay for NavbarItems
// At first it was making a lot more work, but was refactored
const mapStateToProps = () => {
  const navbarItems = {
    '/': 'Users',
    '/duties': 'Duties',
    '/stats': 'Statistics',
    '/dates': 'Holidays',
  }
  return {
    values: navbarItems,
  }
}

export default connect(mapStateToProps)(NavbarItem)
