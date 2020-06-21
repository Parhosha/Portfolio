import React, { useState, useEffect } from 'react';
import s from './Users.modules.css';
import srcImg from '../img/package.png';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
  let pageCount = Math.ceil(props.usersTotalCount / props.pageSize / 10);
  let [pagePortion, setPagePortion] = useState(1);
  let leftPageNumber = (pagePortion - 1) * props.pageSize + 1;
  let rightPageNumber = pagePortion * props.pageSize;

  let pages = [];

  for (var i = 1; i <= pageCount; i++) {
    pages[i] = i;
  }

  return (
    <div>
      <div className="user">
        {props.user.map((p) => (
          <div id={p.id}>
            <div>
              <NavLink to={'/Chat/' + p.id}>
                <img alt="#" src={p.photos.small ? p.photos.small : srcImg}></img>
              </NavLink>
            </div>
            <div>{p.id}</div>
            <div>{p.name}</div>
            <div>{p.title}</div>
            <div className="status">{p.status || '- Empty - '}</div>

            <div>
              {!p.followed ? (
                <button
                  className="button"
                  disabled={props.button.some((id) => id === p.id)}
                  onClick={() => {
                    props.follow(p.id);
                  }}>
                  {' '}
                  Follow{' '}
                </button>
              ) : (
                <button
                  className="button"
                  disabled={props.button.some((id) => id === p.id)}
                  onClick={() => {
                    props.unFollow(p.id);
                  }}>
                  {' '}
                  UnFollow{' '}
                </button>
              )}
            </div>
          </div>
        ))}{' '}
      </div>

      <div className="pageWrap">
        <button onClick={() => setPagePortion(pagePortion - 1)}>Prev</button>
        {pages
          .filter((p) => p >= leftPageNumber && p <= rightPageNumber)
          .map((p) => {
            return (
              <div>
                <div
                  className={props.pageSelected === p ? 'pageSelected' : 'pages'}
                  onClick={() => {
                    props.selectPage(p);
                  }}>
                  {' ' + p + ' '}
                </div>
              </div>
            );
          })}
        <button onClick={() => setPagePortion(pagePortion + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Users;
