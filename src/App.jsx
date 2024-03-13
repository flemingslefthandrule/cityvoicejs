import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/home'
import Signup from './pages/signup'
import Login from './pages/login'
import axios from 'axios'
import Profile from './pages/profile'

function App() {

	const navigate = useNavigate();
	const apiurl = 'http://localhost:8000';
	const myUserName = localStorage.getItem("username");

	const AuthProtection = ({ children }) => {
		const refresh = localStorage.getItem('refresh_token');
		if (refresh) {
			axios.post(apiurl + '/user/token/verify/', {
				'token': refresh
			})
				.then(function (response) {
					if (response.status != 200) {
						localStorage.clear;
						return <Navigate to={"/login"} />
					}
				})
				.catch(function (error) {
					console.log(error);
				});
		}
		else {
			return <Navigate to={"/login"} />
		}
		return children;
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/following/posts' element={
					<div className='h-[100vh] w-[100vw] flex'>
						<LeftHome />
						<div className="p-2 w-[60%] h-[100%] flex flex-col space-y-2 border-x-2 border-x-solid border-x-gray-100">
							<div className="flex">
								<div onClick={() => { navigate('/following/posts') }} className='w-full p-2 text-center border-gray-100 border-solid rounded-md border-2 cursor-pointer'>Posts</div>
								<div onClick={() => { navigate('/following/polls') }} className='w-full p-2 text-center border-gray-100 border-solid rounded-md border-2 cursor-pointer'>Polls</div>
							</div>
							{isCreating ? (
								<CreatePost setIsCreating={setIsCreating} />
							) : (
								<input className="rounded-[100px] p-2" onFocus={() => { setIsCreating(true) }} type="text" placeholder="Create a post" />
							)}
							<FollowingPosts />
						</div>
						<RightHome />
					</div>
				} />
				<Route path='/following/polls' element={
					<div className='h-[100vh] w-[100vw] flex'>
						<LeftHome />
						<div className="p-2 w-[60%] h-[100%] flex flex-col space-y-2 border-x-2 border-x-solid border-x-gray-100">
							<div className="flex">
								<div onClick={() => { navigate('/following/posts') }} className='w-full p-2 text-center border-gray-100 border-solid rounded-md border-2 cursor-pointer'>Posts</div>
								<div onClick={() => { navigate('/following/polls') }} className='w-full p-2 text-center border-gray-100 border-solid rounded-md border-2 cursor-pointer'>Polls</div>
							</div>
							{isCreating ? (
								<CreatePost setIsCreating={setIsCreating} />
							) : (
								<input className="rounded-[100px] p-2" onFocus={() => { setIsCreating(true) }} type="text" placeholder="Create a post" />
							)}
							<FollowingPolls />
						</div>
						<RightHome />
					</div>
				} />
				<Route path='/localFeed/posts' element={
					<div className='h-[100vh] w-[100vw] flex'>
						<LeftHome />
						<div className="p-2 w-[60%] h-[100%] flex flex-col space-y-2 border-x-2 border-x-solid border-x-gray-100">
							<div className="flex">
								<div onClick={() => { navigate('/localFeed/posts') }} className='w-full p-2 text-center border-gray-100 border-solid rounded-md border-2 cursor-pointer'>Posts</div>
								<div onClick={() => { navigate('/localFeed/polls') }} className='w-full p-2 text-center border-gray-100 border-solid rounded-md border-2 cursor-pointer'>Polls</div>
							</div>
							{isCreating ? (
								<CreatePost setIsCreating={setIsCreating} />
							) : (
								<input className="rounded-[100px] p-2" onFocus={() => { setIsCreating(true) }} type="text" placeholder="Create a post" />
							)}
							<LocalFeedPosts />
						</div>
						<RightHome />
					</div>
				} />
				<Route path='/localFeed/polls' element={
					<div className='h-[100vh] w-[100vw] flex'>
						<LeftHome />
						<div className="p-2 w-[60%] h-[100%] flex flex-col space-y-2 border-x-2 border-x-solid border-x-gray-100">
							<div className="flex">
								<div onClick={() => { navigate('/localFeed/posts') }} className='w-full p-2 text-center border-gray-100 border-solid rounded-md border-2 cursor-pointer'>Posts</div>
								<div onClick={() => { navigate('/localFeed/polls') }} className='w-full p-2 text-center border-gray-100 border-solid rounded-md border-2 cursor-pointer'>Polls</div>
							</div>
							{isCreating ? (
								<CreatePost setIsCreating={setIsCreating} />
							) : (
								<input className="rounded-[100px] p-2" onFocus={() => { setIsCreating(true) }} type="text" placeholder="Create a post" />
							)}
							<LocalFeedPolls />
						</div>
						<RightHome />
					</div>
				} />
				<Route path='/globalFeed/posts' element={
					<div className='h-[100vh] w-[100vw] flex'>
						<LeftHome />
						<div className="p-2 w-[60%] h-[100%] flex flex-col space-y-2 border-x-2 border-x-solid border-x-gray-100">
							<div className="flex">
								<div onClick={() => { navigate('/globalFeed/posts') }} className='w-full p-2 text-center border-gray-100 border-solid rounded-md border-2 cursor-pointer'>Posts</div>
								<div onClick={() => { navigate('/globalFeed/polls') }} className='w-full p-2 text-center border-gray-100 border-solid rounded-md border-2 cursor-pointer'>Polls</div>
							</div>
							{isCreating ? (
								<CreatePost setIsCreating={setIsCreating} />
							) : (
								<input className="rounded-[100px] p-2" onFocus={() => { setIsCreating(true) }} type="text" placeholder="Create a post" />
							)}
							<GlobalFeedPosts />
						</div>
						<RightHome />
					</div>
				} />
				<Route path='/globalFeed/polls' element={
					<div className='h-[100vh] w-[100vw] flex'>
						<LeftHome />
						<div className="p-2 w-[60%] h-[100%] flex flex-col space-y-2 border-x-2 border-x-solid border-x-gray-100">
							<div className="flex">
								<div onClick={() => { navigate('/globalFeed/posts') }} className='w-full p-2 text-center border-gray-100 border-solid rounded-md border-2 cursor-pointer'>Posts</div>
								<div onClick={() => { navigate('/globalFeed/posts') }} className='w-full p-2 text-center border-gray-100 border-solid rounded-md border-2 cursor-pointer'>Polls</div>
							</div>
							{isCreating ? (
								<CreatePost setIsCreating={setIsCreating} />
							) : (
								<input className="rounded-[100px] p-2" onFocus={() => { setIsCreating(true) }} type="text" placeholder="Create a post" />
							)}
							<GlobalFeedPollsS />
						</div>
						<RightHome />
					</div>
				} />
				<Route path='signup' element={<Signup />} />
				<Route path='login' element={<Login />} />
				<Route path='profile/:username' element={<AuthProtection> <Profile /> </AuthProtection>} />
			</Routes>
		</BrowserRouter>
	)
}

export default App