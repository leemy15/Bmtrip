<template>
  <div class="myBox">
    <div class="top">
      <div class="bodyBox">
        <div>
          <img
            class="bodyBoxImg"
            width="48px"
            height="48px"
            src="https://product-ssl-qiniu.bmtrip.com/logo_white_2.png?imageView2/4/w/120/h/120/format/jpg/interlace/1/q/70"
            alt
          />
          <span class="Bodyfont">登录/注册</span>
        </div>
        <div>
          <svg
            t="1574667689753"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1441"
            width="12"
            height="12"
          >
            <path
              d="M672.4 512.1L269 108.6c-4.4-4.4-1.2-15 7.3-23.4L291 70.5c8.4-8.4 19-11.7 23.4-7.3L755 503.8c1.8 1.8 2.3 4.8 1.7 8.1 0.7 3.4 0.2 6.4-1.7 8.2L314.3 960.8c-4.4 4.4-14.9 1.2-23.4-7.2l-14.7-14.7c-8.4-8.4-11.7-18.9-7.2-23.4l403.4-403.4z"
              fill="#666666"
              p-id="1442"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="bodyBox">
        <div>
          <img
            class="bodyBoxImg"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTYgMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjYgKDY3NDkxKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY25fb3JkZXI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0i5paR6ams5peF5ri45pS554mIIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i5oiR55qEX+eZu+W9leWJjSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM4LjAwMDAwMCwgLTE4NS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Im1vZHVsZTAxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOC4wMDAwMDAsIDE2OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLmiJHnmoTorqLljZUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4LjAwMDAwMCwgMTUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Imljbl9vcmRlciI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgb3BhY2l0eT0iMCIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNCwyIEwxNiwyIEMxNi41NTIyODQ3LDIgMTcsMi40NDc3MTUyNSAxNywzIEwxNywxMiBDMTcsMTUuMzEzNzA4NSAxNC4zMTM3MDg1LDE4IDExLDE4IEw0LDE4IEMzLjQ0NzcxNTI1LDE4IDMsMTcuNTUyMjg0NyAzLDE3IEwzLDMgQzMsMi40NDc3MTUyNSAzLjQ0NzcxNTI1LDIgNCwyIFoiIGlkPSJQYXRoIiBzdHJva2U9IiMzMzMzMzMiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTYsNiBMMTQsNiIgaWQ9IlBhdGgiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik02LDEwIEwxMiwxMCIgaWQ9IlBhdGgiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
            alt
          />
          我的订单
        </div>
        <div>
          <svg
            t="1574667689753"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1441"
            width="12"
            height="12"
          >
            <path
              d="M672.4 512.1L269 108.6c-4.4-4.4-1.2-15 7.3-23.4L291 70.5c8.4-8.4 19-11.7 23.4-7.3L755 503.8c1.8 1.8 2.3 4.8 1.7 8.1 0.7 3.4 0.2 6.4-1.7 8.2L314.3 960.8c-4.4 4.4-14.9 1.2-23.4-7.2l-14.7-14.7c-8.4-8.4-11.7-18.9-7.2-23.4l403.4-403.4z"
              fill="#666666"
              p-id="1442"
            />
          </svg>
        </div>
      </div>
      <div class="bodyBox">
        <div>
          <img
            class="bodyBoxImg"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIxNHB4IiB2aWV3Qm94PSIwIDAgMjAgMTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjYgKDY3NDkxKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY25fY291cG9uPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IuaWkemprOaXhea4uOaUueeJiCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuaIkeeahF/nmbvlvZXlkI4iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNi4wMDAwMDAsIC0yMzguMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJtb2R1bGUwMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTguMDAwMDAwLCAxNjkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i5oiR55qE5LyY5oOg5Yi4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOC4wMDAwMDAsIDY2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJpY25fY291cG9uIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiBvcGFjaXR5PSIwIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNywxMCBDMTcsOC44OTU0MzA1IDE3Ljg5NTQzMDUsOCAxOSw4IEwxOSw1IEMxOSw0LjQ0NzcxNTI1IDE4LjU1MjI4NDcsNCAxOCw0IEwyLDQgQzEuNDQ3NzE1MjUsNCAxLDQuNDQ3NzE1MjUgMSw1IEwxLDggQzIuMTA0NTY5NSw4IDMsOC44OTU0MzA1IDMsMTAgQzMsMTEuMTA0NTY5NSAyLjEwNDU2OTUsMTIgMSwxMiBMMSwxNSBDMSwxNS41NTIyODQ3IDEuNDQ3NzE1MjUsMTYgMiwxNiBMMTgsMTYgQzE4LjU1MjI4NDcsMTYgMTksMTUuNTUyMjg0NyAxOSwxNSBMMTksMTIgQzE3Ljg5NTQzMDUsMTIgMTcsMTEuMTA0NTY5NSAxNywxMCBaIiBpZD0iUGF0aCIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMCwxMy4yNSBMMTAsOS4yNSIgaWQ9IlBhdGgiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMiw4Ljc1IEw4LDguNzUiIGlkPSJQYXRoIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIsMTAuNzUgTDgsMTAuNzUiIGlkPSJQYXRoIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cG9seWxpbmUgaWQ9IlBhdGgiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBwb2ludHM9IjEyLjEyIDYuNzUgMTAgOC44NyA3Ljg4IDYuNzUiPjwvcG9seWxpbmU+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
            alt
          />
          我的优惠券
        </div>
        <div>
          <svg
            t="1574667689753"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1441"
            width="12"
            height="12"
          >
            <path
              d="M672.4 512.1L269 108.6c-4.4-4.4-1.2-15 7.3-23.4L291 70.5c8.4-8.4 19-11.7 23.4-7.3L755 503.8c1.8 1.8 2.3 4.8 1.7 8.1 0.7 3.4 0.2 6.4-1.7 8.2L314.3 960.8c-4.4 4.4-14.9 1.2-23.4-7.2l-14.7-14.7c-8.4-8.4-11.7-18.9-7.2-23.4l403.4-403.4z"
              fill="#666666"
              p-id="1442"
            />
          </svg>
        </div>
      </div>
      <div class="bodyBox">
        <div>
          <img
            class="bodyBoxImg"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjYgKDY3NDkxKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY25fbWVtYmVyY2VudGVyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IuaWkemprOaXhea4uOaUueeJiCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuaIkeeahF/nmbvlvZXlkI4iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNy4wMDAwMDAsIC0yODcuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJtb2R1bGUwMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTguMDAwMDAwLCAxNjkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i5Lya5ZGY5Lit5b+DIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOC4wMDAwMDAsIDExNy4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iaWNuX21lbWJlcmNlbnRlciI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgb3BhY2l0eT0iMCIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8cG9seWxpbmUgaWQ9IlBhdGgiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwb2ludHM9IjEyLjk4IDcuOCAxOC40MSA3LjggMTQuMDcgMTAuOTYiPjwvcG9seWxpbmU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5bGluZSBpZD0iUGF0aCIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBvaW50cz0iNS45OCAxMC45OSAxLjU5IDcuOCA3LjA5IDcuOCI+PC9wb2x5bGluZT4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwLjA2LDEzLjkxIEwxNS4yNiwxNy42OSBDMTQuODg4OTQxMSwxNC45OTkzNDU1IDE0LjM4MTYyMjQsMTIuMzI5MjQ3NCAxMy43NCw5LjY5IEMxMy4wOSw3LjY5IDEwLjA2LDEuNjkgMTAuMDYsMS42OSBMMTAsMS42OSBDMTAsMS42OSA3LDcuNjkgNi4zMiw5LjY5IEM1LjY3ODM3NzU1LDEyLjMyOTI0NzQgNS4xNzEwNTg5MSwxNC45OTkzNDU1IDQuOCwxNy42OSBMMTAsMTMuOTEgTDEwLjA2LDEzLjkxIFoiIGlkPSJQYXRoIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
            alt
          />
          积分商城
        </div>
        <div>
          <svg
            t="1574667689753"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1441"
            width="12"
            height="12"
          >
            <path
              d="M672.4 512.1L269 108.6c-4.4-4.4-1.2-15 7.3-23.4L291 70.5c8.4-8.4 19-11.7 23.4-7.3L755 503.8c1.8 1.8 2.3 4.8 1.7 8.1 0.7 3.4 0.2 6.4-1.7 8.2L314.3 960.8c-4.4 4.4-14.9 1.2-23.4-7.2l-14.7-14.7c-8.4-8.4-11.7-18.9-7.2-23.4l403.4-403.4z"
              fill="#666666"
              p-id="1442"
            />
          </svg>
        </div>
      </div>
      <div class="bodyBox">
        <div>
          <img
            class="bodyBoxImg"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMjAgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjYgKDY3NDkxKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY25fdHJhdmVsZXJzPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IuaWkemprOaXhea4uOaUueeJiCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuaIkeeahF/nmbvlvZXlkI4iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNi4wMDAwMDAsIC0zMzkuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJtb2R1bGUwMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTguMDAwMDAwLCAxNjkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i5bi455So5Ye66KGM5Lq6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOC4wMDAwMDAsIDE2OC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iaWNuX3RyYXZlbGVycyI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgb3BhY2l0eT0iMCIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHg9IjEiIHk9IjMiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNCIgcng9IjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTExLDcgTDE3LDciIGlkPSJQYXRoIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTEsOSBMMTUsOSIgaWQ9IlBhdGgiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY3g9IjYuNSIgY3k9IjguMjUiIHI9IjIiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMy41LDEzLjc1IEMzLjUsMTIuMDkzMTQ1OCA0Ljg0MzE0NTc1LDEwLjc1IDYuNSwxMC43NSBDOC4xNTY4NTQyNSwxMC43NSA5LjUsMTIuMDkzMTQ1OCA5LjUsMTMuNzUiIGlkPSJQYXRoIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
            alt
          />
          常用出行人
        </div>
        <div>
          <svg
            t="1574667689753"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1441"
            width="12"
            height="12"
          >
            <path
              d="M672.4 512.1L269 108.6c-4.4-4.4-1.2-15 7.3-23.4L291 70.5c8.4-8.4 19-11.7 23.4-7.3L755 503.8c1.8 1.8 2.3 4.8 1.7 8.1 0.7 3.4 0.2 6.4-1.7 8.2L314.3 960.8c-4.4 4.4-14.9 1.2-23.4-7.2l-14.7-14.7c-8.4-8.4-11.7-18.9-7.2-23.4l403.4-403.4z"
              fill="#666666"
              p-id="1442"
            />
          </svg>
        </div>
      </div>
      <router-link class="bodyBox" to="/myCollect" tag="div">
        <div>
          <img
            class="bodyBoxImg"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMjAgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjYgKDY3NDkxKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY25fZmFjb3VyaXRlPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IuaWkemprOaXhea4uOaUueeJiCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuaIkeeahF/nmbvlvZXlkI4iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNi4wMDAwMDAsIC0zOTAuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJtb2R1bGUwMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTguMDAwMDAwLCAxNjkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i5oiR55qE5pS26JePIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOC4wMDAwMDAsIDIxOS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iaWNuX2ZhY291cml0ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgb3BhY2l0eT0iMCIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHg9IjEiIHk9IjMiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNCIgcng9IjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcG9pbnRzPSIxMCA2LjIgMTAuOTQgOS4xIDE0IDkuMSAxMS41MyAxMC45IDEyLjQ3IDEzLjggMTAgMTIuMDEgNy41MyAxMy44IDguNDcgMTAuOSA2IDkuMSA5LjA2IDkuMSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
            alt
          />
          我的收藏
        </div>
        <div>
          <svg
            t="1574667689753"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1441"
            width="12"
            height="12"
          >
            <path
              d="M672.4 512.1L269 108.6c-4.4-4.4-1.2-15 7.3-23.4L291 70.5c8.4-8.4 19-11.7 23.4-7.3L755 503.8c1.8 1.8 2.3 4.8 1.7 8.1 0.7 3.4 0.2 6.4-1.7 8.2L314.3 960.8c-4.4 4.4-14.9 1.2-23.4-7.2l-14.7-14.7c-8.4-8.4-11.7-18.9-7.2-23.4l403.4-403.4z"
              fill="#666666"
              p-id="1442"
            />
          </svg>
        </div>
      </router-link>
    </div>

    <div class="footer">
      <div class="bodyBox">
        <div>
          <img
            class="bodyBoxImg"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTYgMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjYgKDY3NDkxKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY25fYm10cmlwPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IuaWkemprOaXhea4uOaUueeJiCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuaIkeeahF/nmbvlvZXlkI4iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zOC4wMDAwMDAsIC00NDkuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJtb2R1bGUwMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTguMDAwMDAwLCA0MzMuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i5YWz5LqO5paR6amsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOC4wMDAwMDAsIDE1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJpY25fYm10cmlwIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiBvcGFjaXR5PSIwIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zLjA3LDE4IEMzLjA3LDE4IDMuMDcsNy4zMyAxMS42LDIgTDExLjYsNC4xMyBMMTYuOTMsOS40NyBMMTUuODcsMTEuNiBMMTEuNiwxMC41MyBMMTMuNzMsMTggTDMuMDcsMTggWiIgaWQ9IlBhdGgiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
            alt
          />
          关于斑马
        </div>
        <div>
          <svg
            t="1574667689753"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1441"
            width="12"
            height="12"
          >
            <path
              d="M672.4 512.1L269 108.6c-4.4-4.4-1.2-15 7.3-23.4L291 70.5c8.4-8.4 19-11.7 23.4-7.3L755 503.8c1.8 1.8 2.3 4.8 1.7 8.1 0.7 3.4 0.2 6.4-1.7 8.2L314.3 960.8c-4.4 4.4-14.9 1.2-23.4-7.2l-14.7-14.7c-8.4-8.4-11.7-18.9-7.2-23.4l403.4-403.4z"
              fill="#666666"
              p-id="1442"
            />
          </svg>
        </div>
      </div>
      <div class="bodyBox">
        <div>
          <img
            class="bodyBoxImg"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTYgMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjYgKDY3NDkxKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY25fY3VzdG9tZXJzZXJ2aWNlPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IuaWkemprOaXhea4uOaUueeJiCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuaIkeeahF/nmbvlvZXlkI4iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zOC4wMDAwMDAsIC01MDAuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJtb2R1bGUwMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTguMDAwMDAwLCA0MzMuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i6IGU57O75a6i5pyNIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOC4wMDAwMDAsIDY2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJpY25fY3VzdG9tZXJzZXJ2aWNlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiBvcGFjaXR5PSIwIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zLDEyIEwzLDkgQzMsNS4xMzQwMDY3NSA2LjEzNDAwNjc1LDIgMTAsMiBDMTEuODU2NTE1NCwyIDEzLjYzNjk5MjgsMi43Mzc0OTc4OCAxNC45NDk3NDc1LDQuMDUwMjUyNTMgQzE2LjI2MjUwMjEsNS4zNjMwMDcxOCAxNyw3LjE0MzQ4NDU3IDE3LDkgTDE3LDE0IEMxNywxNi4yMDkxMzkgMTUuMjA5MTM5LDE4IDEzLDE4IiBpZD0iUGF0aCIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgc3Ryb2tlPSIjMzMzMzMzIiB4PSIzIiB5PSI5IiB3aWR0aD0iNCIgaGVpZ2h0PSI2IiByeD0iMiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBzdHJva2U9IiMzMzMzMzMiIHg9IjEzIiB5PSI5IiB3aWR0aD0iNCIgaGVpZ2h0PSI2IiByeD0iMiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
            alt
          />
          联系客服
        </div>
        <div>
          <svg
            t="1574667689753"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1441"
            width="12"
            height="12"
          >
            <path
              d="M672.4 512.1L269 108.6c-4.4-4.4-1.2-15 7.3-23.4L291 70.5c8.4-8.4 19-11.7 23.4-7.3L755 503.8c1.8 1.8 2.3 4.8 1.7 8.1 0.7 3.4 0.2 6.4-1.7 8.2L314.3 960.8c-4.4 4.4-14.9 1.2-23.4-7.2l-14.7-14.7c-8.4-8.4-11.7-18.9-7.2-23.4l403.4-403.4z"
              fill="#666666"
              p-id="1442"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='stylus' scoped>
@import '~assets/border.styl'
.Bodyfont
  font-size 21px
  color #333
.myBox
  height 100%
  display flex
  flex-direction column
  background-color #f5f5f5
.top
  height 0.7rem
  background-color #fff
  padding-right 0.18rem
.body
  height 2.5rem
  background-color #fff
  margin 0.18rem 0.18rem
.footer
  height 1rem
  background-color #fff
  margin 0rem 0.18rem
.bodyBox
  color #999
  height 0.5rem
  $border(0 0 1px 0, #ebedf0, solid)
  line-height 0.5rem
  padding 0 0.2rem
  display flex
  justify-content space-between
.bodyBoxImg
  margin-right 0.1rem
</style>