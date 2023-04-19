import { FC, useContext } from "react"
import { BucketContext } from "../../utils/BucketContext"
import { Item } from "../../types/Item";

export const Bucket: FC = () => {
  const { bucket } = useContext(BucketContext);

  if (!bucket) {
    return (
      <h1>Empty</h1>
    )
  }

  return (
    <div className="bucket">
      <h1 className="bucket__title">
        Bucket
      </h1>

      <div className="bucket__content">
        <div className="bucket__items">
          {bucket.map((item: Item) => {
            return (
              <div className="bucket__item">
                <div className="bucket__item-image">

                </div>
              </div>
            )
          })}
        </div>

        <div className="bucket__summary">

        </div>
      </div>

    </div>
  )
}