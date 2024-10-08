import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from './context';
import axios from 'axios';

function Photo() {

    const { avatarUrl } = useContext(UserContext);

    const [formData, setFormData] = useState({
        nickName: '',
        username: ''
    });
    const { userId, setAvatarUrl } = useContext(UserContext);

    useEffect(() => {
        console.log('Fetched userId:', userId);

        // 從後端獲取用戶資料
        const token = localStorage.getItem('token'); // 假設 token 已存儲在 localStorage 中

        axios.get(`http://localhost:8080/api/auth/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}` // 設置 Authorization 標頭
            }
        })
            .then(response => {
                const userData = response.data;
                setFormData({
                    nickName: userData.nickName,  // 假設後端返回的資料包含 nickName 和 username
                    username: userData.username
                });
            })
            .catch(error => {
                console.error("獲取用戶資料時發生錯誤:", error);
            });
    }, [userId]);

    return (
        <div className="Profile">
            <>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <link rel="icon" type="image/png" href="assets/images/logo-16x16.png" />
                {/* The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags */}
                <title>Argon - Social Network</title>
                {/* Fonts */}
                <link
                    href="https://fonts.googleapis.com/css?family=Major+Mono+Display"
                    rel="stylesheet"
                />
                <link
                    href="https://cdn.jsdelivr.net/npm/boxicons@1.9.2/css/boxicons.min.css"
                    rel="stylesheet"
                />
                {/* Styles */}
                <link href="assets/css/bootstrap/bootstrap.min.css" rel="stylesheet" />
                <link href="assets/css/style.css" rel="stylesheet" />
                <link href="assets/css/components.css" rel="stylesheet" />
                <link href="assets/css/profile.css" rel="stylesheet" />
                <link href="assets/css/media.css" rel="stylesheet" />
                <div className="container-fluid newsfeed d-flex" id="wrapper">
                    <div className="row newsfeed-size">
                        <div className="col-md-12 p-0">

                            <div className="row profile-right-side-content">
                                <div className="user-profile">
                                    <div className="profile-header-background">
                                        <a href="#" className="profile-cover">
                                            <img
                                                src="assets/images/users/cover/cover-1.gif"
                                                alt="Profile Header Background"
                                            />
                                        </a>
                                        <div className="cover-overlay">
                                            <a href="#" className="profile-cover"></a>
                                            <a href="#" className="btn btn-update-cover">
                                                <i className="bx bxs-camera" /> Update Cover Photo
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row profile-rows">
                                        <div className="col-md-3">
                                            <div className="profile-info-left">
                                                <div className="text-center">
                                                    <div className="profile-img w-shadow">
                                                        <div className="profile-img-overlay" />
                                                        <img
                                                            src={avatarUrl}
                                                            alt="Avatar"
                                                            className="avatar img-circle"
                                                        />
                                                        <div className="profile-img-caption">
                                                            <label htmlFor="updateProfilePic" className="upload">
                                                                <i className="bx bxs-camera" /> Update
                                                                <input
                                                                    type="file"
                                                                    id="updateProfilePicInput"
                                                                    className="text-center upload"
                                                                />
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <p className="profile-fullname mt-3">{formData.nickName || 'Your Nickname'}</p>
                                                    <p className="profile-username mb-3 text-muted">
                                                        @{formData.username || 'username'}
                                                    </p>
                                                </div>
                                                <div className="intro mt-4">
                                                    <div className="d-flex">
                                                        <button type="button" className="btn btn-follow mr-3">
                                                            <i className="bx bx-plus" /> Follow
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-start-chat"
                                                            data-toggle="modal"
                                                            data-target="#newMessageModal"
                                                        >
                                                            <i className="bx bxs-message-rounded" />{" "}
                                                            <span className="fs-8">Message</span>
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-follow"
                                                            id="moreMobile"
                                                            data-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            <i className="bx bx-dots-horizontal-rounded" />{" "}
                                                            <span className="fs-8">More</span>
                                                        </button>
                                                        <div
                                                            className="dropdown-menu dropdown-menu-right profile-ql-dropdown"
                                                            aria-labelledby="moreMobile"
                                                        >
                                                            <a href="newsfeed.html" className="dropdown-item">
                                                                Timeline
                                                            </a>
                                                            <a href="/about" className="dropdown-item">
                                                                About
                                                            </a>
                                                            <a href="followers.html" className="dropdown-item">
                                                                Followers
                                                            </a>
                                                            <a href="following.html" className="dropdown-item">
                                                                Following
                                                            </a>
                                                            <a href="photos.html" className="dropdown-item">
                                                                Photos
                                                            </a>
                                                            <a href="videos.html" className="dropdown-item">
                                                                Videos
                                                            </a>
                                                            <a href="check-ins.html" className="dropdown-item">
                                                                Check-Ins
                                                            </a>
                                                            <a href="events.html" className="dropdown-item">
                                                                Events
                                                            </a>
                                                            <a href="likes.html" className="dropdown-item">
                                                                Likes
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="intro mt-5 mv-hidden">
                                                    <div className="intro-item d-flex justify-content-between align-items-center">
                                                        <h3 className="intro-about">Intro</h3>
                                                    </div>
                                                    <div className="intro-item d-flex justify-content-between align-items-center">
                                                        <p className="intro-title text-muted">
                                                            <i className="bx bx-briefcase text-primary" /> Web
                                                            Developer at <a href="#">Company Name</a>
                                                        </p>
                                                    </div>
                                                    <div className="intro-item d-flex justify-content-between align-items-center">
                                                        <p className="intro-title text-muted">
                                                            <i className="bx bx-map text-primary" /> Lives in{" "}
                                                            <a href="#">City, Country</a>
                                                        </p>
                                                    </div>
                                                    <div className="intro-item d-flex justify-content-between align-items-center">
                                                        <p className="intro-title text-muted">
                                                            <i className="bx bx-time text-primary" /> Last Login{" "}
                                                            <a href="#">
                                                                Online{" "}
                                                                <span className="ml-1 online-status bg-success" />
                                                            </a>
                                                        </p>
                                                    </div>
                                                    <div className="intro-item d-flex justify-content-between align-items-center">
                                                        <a
                                                            href="#"
                                                            className="btn btn-quick-link join-group-btn border w-100"
                                                        >
                                                            Edit Details
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="intro mt-5 row mv-hidden">
                                                    <div className="col-md-4">
                                                        <img
                                                            src="assets/images/users/album/album-1.jpg"
                                                            width={95}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <img
                                                            src="assets/images/users/album/album-2.jpg"
                                                            width={95}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <img
                                                            src="assets/images/users/album/album-3.jpg"
                                                            width={95}
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="intro mt-5 mv-hidden">
                                                    <div className="intro-item d-flex justify-content-between align-items-center">
                                                        <h3 className="intro-about">Other Social Accounts</h3>
                                                    </div>
                                                    <div className="intro-item d-flex justify-content-between align-items-center">
                                                        <p className="intro-title text-muted">
                                                            <i className="bx bxl-facebook-square facebook-color" />{" "}
                                                            <a href="#" target="_blank">
                                                                facebook.com/username
                                                            </a>
                                                        </p>
                                                    </div>
                                                    <div className="intro-item d-flex justify-content-between align-items-center">
                                                        <p className="intro-title text-muted">
                                                            <i className="bx bxl-twitter twitter-color" />{" "}
                                                            <a href="#" target="_blank">
                                                                twitter.com/username
                                                            </a>
                                                        </p>
                                                    </div>
                                                    <div className="intro-item d-flex justify-content-between align-items-center">
                                                        <p className="intro-title text-muted">
                                                            <i className="bx bxl-instagram instagram-color" />{" "}
                                                            <a href="#" target="_blank">
                                                                instagram.com/username
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-9 p-0">
                                            <div className="profile-info-right">
                                                {/* Posts section */}
                                                <div className="row">
                                                    <div className="col-md-9 profile-center">
                                                        <ul className="list-inline profile-links d-flex justify-content-between w-shadow rounded">
                                                            <li className="list-inline-item ">
                                                                <a href="/profile">Timeline</a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a href="/about">About</a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a href="/friends">Friends</a>
                                                            </li>
                                                            <li className="list-inline-item profile-active">
                                                                <a href="/photo">Photos</a>
                                                            </li>
                                                            <li className="list-inline-item dropdown">
                                                                <a
                                                                    href="#"
                                                                    data-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="bx bx-dots-vertical-rounded" />
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-right profile-ql-dropdown">
                                                                    <a href="#" className="dropdown-item">
                                                                        Activity Log
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        Videos
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        Check-Ins
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        Events
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        Likes
                                                                    </a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <ul className="list-group list-group-horizontal types-list fs-8">
                                                            <form className="list-group-item d-flex w-100 align-items-center p-0 form-inline dropdown search-form">
                                                                <div className="input-group w-95" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="searchDropdown">
                                                                    <input type="text" className="form-control search-input" placeholder="Search for photo" aria-label="Search" aria-describedby="search-addon" />
                                                                    <div className="input-group-append">
                                                                        <button className="btn search-button" type="button">
                                                                            <i className='bx bx-search'></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <ul className="dropdown-menu notify-drop nav-drop shadow-sm" aria-labelledby="searchDropdown">
                                                                    <div className="notify-drop-title">
                                                                        <div className="row">
                                                                            <div className="col-md-6 col-sm-6 col-xs-6 fs-8">Search Results
                                                                                <span className="badge badge-pill badge-primary ml-2">29</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="drop-content">
                                                                        <h6 className="dropdown-header">Peoples</h6>
                                                                        <li className="dropdown-item">
                                                                            <div className="col-md-2 col-sm-2 col-xs-2">
                                                                                <div className="notify-img">
                                                                                    <img src="assets/images/users/user-6.png" alt="Search result" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-10 col-sm-10 col-xs-10">
                                                                                <a href="#" className="notification-user">Susan P. Jarvis</a>
                                                                                <a href="#" className="btn btn-quick-link join-group-btn border text-right float-right">
                                                                                    Add Friend
                                                                                </a>
                                                                                <p className="time">6 Mutual friends</p>
                                                                            </div>
                                                                        </li>
                                                                        <li className="dropdown-item">
                                                                            <div className="col-md-2 col-sm-2 col-xs-2">
                                                                                <div className="notify-img">
                                                                                    <img src="assets/images/users/user-5.png" alt="Search result" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-10 col-sm-10 col-xs-10">
                                                                                <a href="#" className="notification-user">Ruth D. Greene</a>
                                                                                <a href="#" className="btn btn-quick-link join-group-btn border text-right float-right">
                                                                                    Add Friend
                                                                                </a>
                                                                            </div>
                                                                        </li>
                                                                        <h6 className="dropdown-header">Groups</h6>
                                                                        <li className="dropdown-item">
                                                                            <div className="col-md-2 col-sm-2 col-xs-2">
                                                                                <div className="notify-img">
                                                                                    <img src="assets/images/groups/group-2.jpg" alt="Search result" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-10 col-sm-10 col-xs-10">
                                                                                <a href="#" className="notification-user">Tourism</a>
                                                                                <a href="#" className="btn btn-quick-link join-group-btn border text-right float-right">
                                                                                    Join
                                                                                </a>
                                                                                <p className="time">2.5k Members 35+ post a week</p>
                                                                            </div>
                                                                        </li>
                                                                        <li className="dropdown-item">
                                                                            <div className="col-md-2 col-sm-2 col-xs-2">
                                                                                <div className="notify-img">
                                                                                    <img src="assets/images/groups/group-1.png" alt="Search result" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-10 col-sm-10 col-xs-10">
                                                                                <a href="#" className="notification-user">Argon Social Network
                                                                                    <img src="assets/images/theme/verify.png" width="10px" className="verify" alt="Group verified" />
                                                                                </a>
                                                                                <a href="#" className="btn btn-quick-link join-group-btn border text-right float-right">
                                                                                    Join
                                                                                </a>
                                                                                <p className="time">10k Members 20+ post a week</p>
                                                                            </div>
                                                                        </li>
                                                                    </div>
                                                                    <div className="notify-drop-footer text-center">
                                                                        <a href="#">See More</a>
                                                                    </div>
                                                                </ul>
                                                            </form>
                                                        </ul>
                                                        <div className="bg-white py-3 px-4 shadow-sm">
                                                            <div className="card-head d-flex justify-content-between">
                                                                <h5 className="mb-4">Photo</h5>
                                                                <a href="#" className="btn btn-link">See All</a>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-4 col-sm-6">
                                                                    <div className="card group-card shadow-sm">
                                                                        <img src="assets/images/groups/group-1.png" className="card-img-top group-card-image" alt="Group image" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4 col-sm-6">
                                                                    <div className="card group-card shadow-sm">
                                                                        <img src="assets/images/groups/group-2.jpg" className="card-img-top group-card-image" alt="Group image" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4 col-sm-6">
                                                                    <div className="card group-card shadow-sm">
                                                                        <img src="assets/images/groups/group-3.jpg" className="card-img-top group-card-image" alt="Group image" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4 col-sm-6">
                                                                    <div className="card group-card shadow-sm">
                                                                        <img src="assets/images/groups/group-4.jpg" className="card-img-top group-card-image" alt="Group image" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3 profile-quick-media">
                                                        <h6 className="text-muted timeline-title">
                                                            Recent Media
                                                        </h6>
                                                        <div className="quick-media">
                                                            <div className="media-overlay" />
                                                            <a href="#" className="quick-media-img">
                                                                <img
                                                                    src="assets/images/users/album/album-1.jpg"
                                                                    alt="Quick media"
                                                                />
                                                            </a>
                                                            <div className="media-overlay-content">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="media-overlay-owner">
                                                                        <img
                                                                            src="assets/images/users/user-12.png"
                                                                            alt="Media owner image"
                                                                        />
                                                                        <span className="overlay-owner-name fs-9">
                                                                            Irwin M. Spelle
                                                                        </span>
                                                                    </div>
                                                                    <div className="dropdown">
                                                                        <a
                                                                            href="#"
                                                                            className="overlay-more"
                                                                            data-toggle="dropdown"
                                                                            role="button"
                                                                            aria-haspopup="true"
                                                                            aria-expanded="false"
                                                                        >
                                                                            <i className="bx bx-dots-horizontal-rounded" />
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-right nav-drop dropdown-shadow">
                                                                            <a className="dropdown-item" href="#">
                                                                                Save post
                                                                            </a>
                                                                            <a className="dropdown-item" href="#">
                                                                                Turn on notifications
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="overlay-bottom d-flex justify-content-between align-items-center">
                                                                    <div className="argon-reaction">
                                                                        <span className="like-btn">
                                                                            <a
                                                                                href="#"
                                                                                className="post-card-buttons"
                                                                                id="reactions"
                                                                            >
                                                                                <i className="bx bxs-like mr-1" /> 67
                                                                            </a>
                                                                            <ul className="reactions-box dropdown-shadow">
                                                                                <li
                                                                                    className="reaction reaction-like"
                                                                                    data-reaction="Like"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-love"
                                                                                    data-reaction="Love"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-haha"
                                                                                    data-reaction="HaHa"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-wow"
                                                                                    data-reaction="Wow"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-sad"
                                                                                    data-reaction="Sad"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-angry"
                                                                                    data-reaction="Angry"
                                                                                />
                                                                            </ul>
                                                                        </span>
                                                                    </div>
                                                                    <div className="liked-users">
                                                                        <img
                                                                            src="assets/images/users/user-9.png"
                                                                            alt="Liked users"
                                                                        />
                                                                        <img
                                                                            src="assets/images/users/user-6.png"
                                                                            alt="Liked users"
                                                                        />
                                                                        <img
                                                                            src="assets/images/users/user-12.png"
                                                                            alt="Liked users"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="quick-media">
                                                            <div className="media-overlay" />
                                                            <a href="#" className="quick-media-img">
                                                                <img
                                                                    src="assets/images/users/album/album-2.jpg"
                                                                    alt="Quick media"
                                                                />
                                                            </a>
                                                            <div className="media-overlay-content">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="media-overlay-owner">
                                                                        <img
                                                                            src="assets/images/users/user-12.png"
                                                                            alt="Media owner image"
                                                                        />
                                                                        <span className="overlay-owner-name fs-9">
                                                                            Irwin M. Spelle
                                                                        </span>
                                                                    </div>
                                                                    <div className="dropdown">
                                                                        <a
                                                                            href="#"
                                                                            className="overlay-more"
                                                                            data-toggle="dropdown"
                                                                            role="button"
                                                                            aria-haspopup="true"
                                                                            aria-expanded="false"
                                                                        >
                                                                            <i className="bx bx-dots-horizontal-rounded" />
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-right nav-drop dropdown-shadow">
                                                                            <a className="dropdown-item" href="#">
                                                                                Save post
                                                                            </a>
                                                                            <a className="dropdown-item" href="#">
                                                                                Turn on notifications
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="overlay-bottom d-flex justify-content-between align-items-center">
                                                                    <div className="argon-reaction">
                                                                        <span className="like-btn">
                                                                            <a
                                                                                href="#"
                                                                                className="post-card-buttons"
                                                                                id="reactions"
                                                                            >
                                                                                <i className="bx bxs-like mr-1" /> 67
                                                                            </a>
                                                                            <ul className="reactions-box dropdown-shadow">
                                                                                <li
                                                                                    className="reaction reaction-like"
                                                                                    data-reaction="Like"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-love"
                                                                                    data-reaction="Love"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-haha"
                                                                                    data-reaction="HaHa"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-wow"
                                                                                    data-reaction="Wow"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-sad"
                                                                                    data-reaction="Sad"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-angry"
                                                                                    data-reaction="Angry"
                                                                                />
                                                                            </ul>
                                                                        </span>
                                                                    </div>
                                                                    <div className="liked-users">
                                                                        <img
                                                                            src="assets/images/users/user-9.png"
                                                                            alt="Liked users"
                                                                        />
                                                                        <img
                                                                            src="assets/images/users/user-6.png"
                                                                            alt="Liked users"
                                                                        />
                                                                        <img
                                                                            src="assets/images/users/user-12.png"
                                                                            alt="Liked users"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="quick-media">
                                                            <div className="media-overlay" />
                                                            <a href="#" className="quick-media-img">
                                                                <img
                                                                    src="assets/images/users/album/album-3.jpg"
                                                                    alt="Quick media"
                                                                />
                                                            </a>
                                                            <div className="media-overlay-content">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="media-overlay-owner">
                                                                        <img
                                                                            src="assets/images/users/user-12.png"
                                                                            alt="Media owner image"
                                                                        />
                                                                        <span className="overlay-owner-name fs-9">
                                                                            Irwin M. Spelle
                                                                        </span>
                                                                    </div>
                                                                    <div className="dropdown">
                                                                        <a
                                                                            href="#"
                                                                            className="overlay-more"
                                                                            data-toggle="dropdown"
                                                                            role="button"
                                                                            aria-haspopup="true"
                                                                            aria-expanded="false"
                                                                        >
                                                                            <i className="bx bx-dots-horizontal-rounded" />
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-right nav-drop dropdown-shadow">
                                                                            <a className="dropdown-item" href="#">
                                                                                Save post
                                                                            </a>
                                                                            <a className="dropdown-item" href="#">
                                                                                Turn on notifications
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="overlay-bottom d-flex justify-content-between align-items-center">
                                                                    <div className="argon-reaction">
                                                                        <span className="like-btn">
                                                                            <a
                                                                                href="#"
                                                                                className="post-card-buttons"
                                                                                id="reactions"
                                                                            >
                                                                                <i className="bx bxs-like mr-1" /> 67
                                                                            </a>
                                                                            <ul className="reactions-box dropdown-shadow">
                                                                                <li
                                                                                    className="reaction reaction-like"
                                                                                    data-reaction="Like"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-love"
                                                                                    data-reaction="Love"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-haha"
                                                                                    data-reaction="HaHa"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-wow"
                                                                                    data-reaction="Wow"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-sad"
                                                                                    data-reaction="Sad"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-angry"
                                                                                    data-reaction="Angry"
                                                                                />
                                                                            </ul>
                                                                        </span>
                                                                    </div>
                                                                    <div className="liked-users">
                                                                        <img
                                                                            src="assets/images/users/user-9.png"
                                                                            alt="Liked users"
                                                                        />
                                                                        <img
                                                                            src="assets/images/users/user-6.png"
                                                                            alt="Liked users"
                                                                        />
                                                                        <img
                                                                            src="assets/images/users/user-12.png"
                                                                            alt="Liked users"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* New message modal */}
                <div
                    className="modal fade"
                    id="newMessageModal"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="newMessageModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header new-msg-header">
                                <h5 className="modal-title" id="newMessageModalLabel">
                                    Start new conversation
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body new-msg-body">
                                <form action="" method="" className="new-msg-form">
                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">
                                            Message:
                                        </label>
                                        <textarea
                                            className="form-control search-input"
                                            rows={5}
                                            id="message-text"
                                            placeholder="Type a message..."
                                            defaultValue={""}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer new-msg-footer">
                                <button type="button" className="btn btn-primary btn-sm">
                                    Send message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Core */}
                {/* Optional */}
            </>

        </div>
    );
}

export default Photo;