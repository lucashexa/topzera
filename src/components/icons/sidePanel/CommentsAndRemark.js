import React from 'react'
import { CommentsAndRemarkSvg } from '../svgs'
import Generic from './Generic'
import style from '../styles.scss'

export const CommentsAndRemark = (props) => {
  return (
    <Generic props={props}>
      <div>
        <CommentsAndRemarkSvg css={style['CommentsAndRemark']}/>
      </div>
    </Generic>
  )
}