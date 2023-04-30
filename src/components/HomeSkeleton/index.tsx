import { HomeSkeletonContainer, SkeletonContent } from './style'

export function HomeSkeleton() {
  return (
    <HomeSkeletonContainer>
      <div>
        <SkeletonContent />
      </div>
      <div>
        <SkeletonContent />
      </div>
    </HomeSkeletonContainer>
  )
}
