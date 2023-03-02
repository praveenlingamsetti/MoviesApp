import Cookies from 'js-cookie'

import Footer from '../FooterSection'

import Header from '../Header'

import './index.css'

const Account = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <>
      <Header />
      <div className="account-container">
        <h1 className="heading">Account</h1>
        <hr className="hz-line" />
        <div className="membership-container">
          <p className="member-details">Member ship</p>
          <div className="user-details">
            <p className="username">Rahul@gmail.com</p>
            <p className="password">Password</p>
            <span>: ********</span>
          </div>
        </div>
        <hr className="hz-line" />
        <div className="plan-details-container">
          <p className="member-details">Plan Details</p>
          <p className="username">Premium</p>
          <p className="plan-type">Ultra HD</p>
        </div>
        <hr className="hz-line" />
        <button onClick={onClickLogout} type="button" className="logout-btn">
          Logout
        </button>
      </div>
      <Footer />
    </>
  )
}

export default Account
