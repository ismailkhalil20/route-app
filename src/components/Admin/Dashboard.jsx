import React from 'react';
import Posts from './Posts';
import Users from './Users';
import {Link, Route, Switch, useRouteMatch} from 'react-router-dom';

const Dashboard = () => {
	let match = useRouteMatch();
	return (
		<div>
			<h1>Admin Dashboard</h1>
			<ul>
				<li>{<Link to={`${match.url}/posts`}>Posts</Link>}</li>
				<li>{<Link to={`${match.url}/users`}>Users</Link>}</li>
			</ul>
			{/* TODO: you will need to render the Posts and Users components here hint: Switch :) */console.log(match.url, match.path)}
			<Switch>
				<Route path={`${match.path}/Posts`}>
					<Posts />
				</Route>
				<Route path={`${match.path}/users`}>
					<Users />
				</Route>
			</Switch>
		</div>
	);
};

export default Dashboard;
