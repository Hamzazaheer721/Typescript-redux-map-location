import React from 'react'
import Loader from '../../components/loader'

const LazyView = React.lazy(() => import('./view'))

const UserProfileRoute: React.FC = React.memo((props) => (
  <React.Suspense fallback={<Loader />}>
    <LazyView {...props} />
  </React.Suspense>
))

export default UserProfileRoute
