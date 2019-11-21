import React from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const formatDate = (date: string): string =>
  formatDistanceToNow(Date.parse(date), {
    addSuffix: true,
  })

type WhenPostedProps = {
  dateTime: string
}

const WhenPosted: React.FC<WhenPostedProps> = ({ dateTime }) => (
  <>
    <span className='when-posted'>{`Posted ${formatDate(dateTime)}`}</span>
    <style jsx>{`
      .when-posted {
        font-size: 0.9rem;
        color: #999;
      }
    `}</style>
  </>
)

export default WhenPosted
