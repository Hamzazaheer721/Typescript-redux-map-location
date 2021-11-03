import { useState, useEffect, memo, FC, useMemo } from 'react'
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from 'react-google-maps'
import { IMapProps, IPositionStateType } from './types'

const Map: FC<IMapProps> = memo(
  ({ propsLat, propsLong, height, zoom }: IMapProps) => {
    const [mapPosition, setMapPosition] = useState<IPositionStateType>({
      lat: propsLat,
      lng: propsLong
    })
    const [dragable] = useState<boolean>(false)

    const MAP_URL = useMemo<string>(
      () => process.env.REACT_APP_GOOGLE_MAP_URL || '',
      []
    )

    const [markerPosition, setMarkerPosition] = useState<IPositionStateType>({
      lat: propsLat,
      lng: propsLong
    })

    const AsyncMap = useMemo(
      () =>
        // eslint-disable-next-line implicit-arrow-linebreak
        withScriptjs(
          withGoogleMap(() => (
            <GoogleMap defaultZoom={zoom} defaultCenter={mapPosition}>
              <Marker
                draggable={dragable}
                position={{ lat: markerPosition.lat, lng: markerPosition.lng }}
              />
            </GoogleMap>
          ))
        ),
      []
    )

    useEffect(() => {
      setMapPosition({
        lat: propsLat,
        lng: propsLong
      })
      setMarkerPosition({
        lat: propsLat,
        lng: propsLong
      })
    }, [])

    return (
      <div>
        <AsyncMap
          googleMapURL={MAP_URL}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    )
  }
)

export default Map
