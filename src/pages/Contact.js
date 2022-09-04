import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import './contact.css'
function Contact() {
  return (
   <div className='container' >

<MapContainer className={'leaflet-container'} center={[53.885160, 27.613210]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[53.885160, 27.613210]}>
    <Popup>
    Стахановская 41
    </Popup>
  </Marker>
</MapContainer>
   </div>
  )
}

export default Contact