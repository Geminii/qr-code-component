import './style.css'
import QrCodeImgUrl from '@/assets/image-qr-code.png?url'

function QrCode() {
  return (
    <div className="qr-code">
      <img src={QrCodeImgUrl} alt="QR code" />
      <h1>Improve your front-end skills by building projects</h1>
      <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
  )
}

export default QrCode
