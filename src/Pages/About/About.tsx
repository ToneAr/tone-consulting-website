import { Box, ButtonBase, Grid, Paper, Stack, Typography, duration, styled, useTheme } from "@mui/material";
import { useSpring, animated, useScroll, useSpringValue, SpringValue, useTransition } from '@react-spring/web';

import {PageBox, DisplayPanel, PageStack, OutlinedPaper} from '../Common/CommonElements';
import { Component, useEffect, useRef, useState } from "react";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import phoneIcon from'../../Resources/telephone.png';
// import linkedInIcon from'../../Resources/social.png';
import mailIcon from'../../Resources/mail.png';
import linkedInIcon from'../../Resources/linkedin.png';
import githubIcon from '../../Resources/github.png';
import { useGesture } from '@use-gesture/react';

import phoneIconDark from '../../Resources/dark-telephone.png';
import linkedInIconDark from '../../Resources/dark-social.png';
import mailIconDark from '../../Resources/dark-mail.png';
import { Handshake, Opacity } from "@mui/icons-material";
import AnimatedButton from "../Common/AnimatedButton";

import {ReactComponent as PhoneSVG } from '../../Resources/call.svg';
import {ReactComponent as EmailSVG } from '../../Resources/message.svg';
import {ReactComponent as LinkedInSVG } from '../../Resources/linkedin.svg';
import {ReactComponent as GitHubSVG } from '../../Resources/github.svg';
// import linkedInIconDark from'../../Resources/dark-linkedin.png';
// import githubIconDark from '../../Resources/dark-github.png';

function TitleCard ( props: any ) {
	
	const theme = useTheme();
	const AnimatedTypography = animated(Typography);
	const AnimatedBox = animated(Box);

	const { scrollYProgress } = useScroll();
	const scrollSpring: any = useSpring({
		from: {
			opacity: 0.0
		}
		,
		to: [{
			opacity: 0.5
		},{
			opacity: 0.0
		}],
		loop: true,
		delay: 5000,
		config: {
			duration: 2000
		}
	});

	function incrementSubtitle () {
		setDisplayText({
			'Software Development': 'Consulting',
			'Consulting'          : 'Theoretical Physics',
			'Theoretical Physics' : 'Optimization',
			'Optimization'        : 'Software Development'
		}[displayText] ?? 'Software Development');
	};

	const [displayText, setDisplayText] = useState("Software Development");
	const spring = useSpring({
		from:{ 
			opacity: 0,
			x: -200 },
		to: [{
			opacity: 1,
			x: 0
		},{
			opacity: 0,
			x: 200
		},],
		reset: true,
		onRest: () => {
			incrementSubtitle();
		},
		config: {
			mass: 5,
			friction: 200,
			tension: 500
		}
	});


	return <>
		<Box className={props.className} sx={{textAlign:'center', ...props.sx}}>
			<DisplayPanel style={{ ...props.style }}>

				<Typography variant='h1'>
					Antonis Aristeidou
				</Typography>

				<br />

				<Typography>
					<AnimatedTypography variant='h4' sx={{color:theme.palette.text.secondary}} style={spring}>
						{displayText}
					</AnimatedTypography>
				</Typography>

				<br />

				{/* <OutlinedPaper> */}
					<Typography variant='body1' sx={{justifyContent:'center', textAlign:'center', width: '70vw'}}>
						Harnessing a rich blend of theoretical physics and multifaceted professional expertise,
						I am a dynamic consultant and developer committed to crafting innovative software solutions,
						underscored by a relentless pursuit of excellence and growth across a diverse range of sectors.
					</Typography>
				{/* </OutlinedPaper> */}

				<br />

			</DisplayPanel>
		</Box>
	</>
};

function DevPanel ( props: any ) {
	return <Grid container spacing={4.3} sx={{width: '90%'}}>
	<Grid item xs={12}>
	<OutlinedPaper sx={{width: '100%', height: '100%',mb:-4, textAlign:'justify', p:2}}>
		<Typography variant='h5'>
			Experience in both front- and back-end development for an extremely varied scope of projects, including
			building UIs and web-apps using React; Building and deploying online REST APIs using WL or JS; Or
			building desktop applications using WL, always strictly adhering to the agile SDLC methodology and
			DevOps lifecycle.
		</Typography>
	</OutlinedPaper>
	</Grid>
	<Grid item xs={6}>
	<OutlinedPaper sx={{width: '100%', height: '100%',textAlign: 'justify',mb:-4, p:2}}>
		<Typography variant='h5'>
			Having experience in both object oriented- and function programming owing to the symbolic functional
			programming within WL and the object-oriented programming of JS and C++
		</Typography>
	</OutlinedPaper>
	</Grid>
	<Grid item xs={6}>
	<OutlinedPaper sx={{width: '100%', height: '100%',textAlign: 'justify',mb:-4, p:2}}>
		<Typography variant='h5'>
			Almost all project also involved the building and maintaining of multiple auxiliary systems like SQL
			databases; Python and shell scripts; Docker containerisation scripts and others.
		</Typography>
	</OutlinedPaper>
	</Grid>
	<Grid item xs={6}>
	<OutlinedPaper sx={{width: '100%', height: '100%',textAlign: 'justify', mb:-4,p:2}}>
		<Typography variant='h5'>
			Projects were also supported by testing suites which included unit and integration tests (WL and JS),
			“robot” testing of front-end interfaces, and custom git scripts to validate any pushes or merges using the
			appropriate tests.
		</Typography>
	</OutlinedPaper>
	</Grid>
	<Grid item xs={6}>
	<OutlinedPaper sx={{width: '100%', height: '100%',textAlign: 'justify',mb:-4, p:2}}>
		<Typography variant='h5'>
			Coding is my passion and so I undertake various personal project on my personal time including a POS
			system based on React, an algorithm trading bot in python and numerous coding challenges using C++.
		</Typography>
	</OutlinedPaper>
	</Grid>
	</Grid>
};

function TeachPanel ( props: any ) {
	const theme = useTheme();
	return <Grid container spacing={4.3} sx={{width: '90%'}}>
		<Grid item xs={12}>
		<OutlinedPaper sx={{display:'flex', alignItems: 'center', width: '100%', height: '100%', p:2}}>
			<Grid container>
				<Grid item xs={3} sx={{display:'flex', alignItems: 'center'}}>
				<Typography variant="h4" color={theme.palette.text.disabled}>
					Unique talks authored:
				</Typography>
				</Grid>

				<Grid item xs={3}>
				<Typography variant="body1" color={theme.palette.text.disabled}>
					SHOWCASE
				</Typography>
				<Typography variant="body1" >
					Coding a Path Integral Monte
					Carlo Simulator in WL
				</Typography>
				</Grid>
	
				<Grid item xs={3}>
				<Typography variant="body1" color={theme.palette.text.disabled}>
					CASE STUDY
				</Typography>
				<Typography variant="body1">
					Exploring Mars using the
					NASA MarsRoverAPI
				</Typography>
				</Grid>

				<Grid item xs={3}>
				<Typography variant="body1" color={theme.palette.text.disabled}>
					TUTORIAL
				</Typography>
				<Typography variant="body1">
					Using Stylesheets to
					customize Mathematica
				</Typography>

				</Grid>
			</Grid>
		</OutlinedPaper>
	</Grid>
	<Grid item xs={6}>
	<OutlinedPaper sx={{width: '100%', height: '100%',textAlign: 'justify',mb:-4, p:2}}>
		<Typography variant='h5'>
			Experience in writing technical content showcasing how the WL for various applications like physics,
			chemistry, and so on. The presentations followed 3 main types: Lessons, Showcases, Case studies. I wrote
			3 unique talks, 1 of each type, and contributed to countless others, by either updating the content, updating
			or bug fixing demos, or modernizing old presentations.
		</Typography>
	</OutlinedPaper>
	</Grid>
	<Grid item xs={6}>
	<OutlinedPaper sx={{width: '100%', height: '100%',textAlign: 'justify', mb:-4, p:2}}>
		<Typography variant='h5'>
			I also taught, WL101 and “Hands-on start to
			Mathematica” to hundreds of university students and private company engineers, both online and in person
			with workshop type tutorials or formal lectures on the WL with class sizes ranging anywhere from 1 to
			over 50. Some of the universities I visited include UCL, KCL, UCDublin, UOAberdeen among others.
		</Typography>
	</OutlinedPaper>
	</Grid>

	</Grid>
};

function ModelPanel ( props: any ) {
	return <Grid container spacing={4.3} sx={{width: '90%'}}>
	<Grid item xs={12}>
	<OutlinedPaper sx={{width: '100%', height: '100%',textAlign: 'justify', mb:-4 , p:2}}>
		<Typography variant='h5'>
			Having a theoretical physics background, I excelled in any projects that included mathematical/simulation
			modeling and optimization, having simulated many physical systems inside python. 
		</Typography>
	</OutlinedPaper>
	</Grid>
	<Grid item xs={12}>
	<OutlinedPaper sx={{width: '100%', height: '100%',textAlign: 'justify', mb:-4, p:2}}>
		<Typography variant='h5'>
			My first customer project at WREL was an industrial machine setting optimization algorithm intended to
			find settings for a combination of machines as to minimize the required power. I provided the customer
			with multiple options of solution including a Lagrange multiplier local optimization and also a custom
			algorithm I developed for generating a machine settings combination tensor, extracting the surface of
			settings matching required output and then finding the minimum of that surface and also a method utilizing
			WL’s build in NMinimize function. A separate algorithm then had to be developed for the best choice of
			machines at a given output which again uses a bespoke algorithm I designed. Both of these were then
			delivered as online APIs.
		</Typography>
	</OutlinedPaper>
	</Grid>
	</Grid>
};

function CompPanel ({ compSelected = null }:{ compSelected:string|null }) {
		return<>
			{{
				'dev': <DevPanel />,
				'teach': <TeachPanel />,
				'model': <ModelPanel/>,
				'none': null
			}[compSelected ?? 'none']}
	 </>
};

function ContactCard ( props: any ) {
	const theme = useTheme();
	const svgColor = theme.palette.mode === 'dark' ? "#777" : "111";
	let svgWidth = 35;

	interface IContactObj {
		text: string,
		href: string,
		icon: React.ReactNode
	};
	interface IContactColumn {
		title: string,
		data: IContactObj[],
	};
	interface IContactsGrid {
		details : IContactColumn,
		links : IContactColumn,
	};
	
	const contactsObjectArray: IContactsGrid = {
		details : {
			title: "Contact Details",
			data: [{text: 'tonyaris@outlook',
				href: 'mailto:tonyaris@outlook.com',
				icon: <EmailSVG fill={svgColor} width={svgWidth}/>
			},
			{text: '+(44) 747 868 2747',
				href: 'tel:+447478682747',
				icon: <PhoneSVG  fill={svgColor} width={svgWidth}/>
			}],
		},
		links : {
			title:"Links",
			data:[{
				text: 'Antonis Aristeidou',
				href: 'https://www.linkedin.com/in/antonis-aristeidou',
				icon: <LinkedInSVG fill={svgColor} width={svgWidth}/>
			},
			{text: 'ToneAr',
				href: 'https://www.github.com/ToneAr',
				icon: <GitHubSVG fill={svgColor} width={svgWidth}/>
			}],
		}
	};
	
	return <DisplayPanel style={{...props.style}}>
		<Typography variant='h2'>
			Details
		</Typography>
		
		<br/>
		<Grid container spacing={10} direction='row' justifyContent='space-around' sx={{maxWidth: '75vw', textAlign: 'center'}}>
				{
					Object.values(contactsObjectArray).map( (values) => {
							return <Grid item xs={6}>
								<OutlinedPaper className='paper-row'>
									<Stack spacing={2} >

										<Typography variant='h5' sx={{color: theme.palette.text.secondary}}>
											{`${values.title}`}
										</Typography>

										<br/>
										<Grid container spacing={2} sx={{justifyContent:'center', textAlign: 'left'}}>
											{
												values.data.map( (obj: IContactObj) => {
														return<>
															<Grid item xs={3} sx={{ textAlign: 'right',p:0}} >
																{obj.icon}
																{/* <Typography variant='body1'>
																	<img src={theme.palette.mode==='dark' ? obj.icon.dark : obj.icon.default} width={30}/>
																</Typography> */}
															</Grid>
															<Grid item xs={9} sx={{textAlign: 'left',p:0}}>
																<Typography variant='body1'>
																	<a  className='link' href={obj.href} >
																		{`${obj.text}`}
																	</a>
																</Typography>
															</Grid>
														</>
													}
												)
											}
										</Grid>

									</Stack>
								</OutlinedPaper>
							</Grid>
						}
					)
				}
		</Grid>
		<br/>
	</DisplayPanel>
}; 

export default function About() {

	const theme = useTheme();
	const AnimatedBox = animated(Box);
	const [ isCompSelected, setIsCompSelected ] = useState<true | false>(false);
	const [ compSelected, setCompSelected] = useState<string | null>(null);
	const [ isThesisSelected, setIsThesisSelected ] = useState<boolean>(false);

	useEffect(() => {
		document.title = "TONE : About me";
		window.scrollBy(0, 70);
	}, []);

	function compSelectedQ (val :string ) {
		return compSelected === val
	};

	function handleCompBtnClick ( val : string ) {
		if ( compSelected === val ) {
			setCompSelected(null)
			setIsCompSelected(false)
		} else {
			setCompSelected(val)
			setIsCompSelected(true)
		}
	};
	function handleThesisBtnClick ( ) {
		setIsThesisSelected(!isThesisSelected)
	};

	const compAnimationForTitleCard = useSpring({
		scaleY: isCompSelected ? `0%` : `100%`,
		display: isCompSelected ? `none` : `flex`,
		opacity: isCompSelected ? 0 : 1,
	});
	const compAnimationForCompCard = useSpring({
		// y: isCompSelected ? `-30vh` : `0vh`
	});

	return (
		<PageBox>
			<PageStack spacing='5vh'>

					{/* Spacer */}
					<Box sx={{height: '10vh'}} />
				
					{/* Title */}
					<TitleCard style={{...compAnimationForTitleCard}} />

					{/* Core Competencies */}
					<Box sx={{textAlign:'center', display:'block'}}>
						<DisplayPanel style={{...compAnimationForCompCard}}>

						<Typography variant='h2'>
							Core Competencies
						</Typography>
						
						<br/>
						
						<Grid container direction='row' justifyContent='space-evenly'>
							{tmpButtonObj.map(
								obj => {return (
									<AnimatedButton
										sx={{height:'10vh',width:'40vh'}}
										isSelected={ compSelectedQ( obj.key ) }
										onClick={ () => handleCompBtnClick( obj.key ) }
									>
										{obj.text}
									</AnimatedButton>
								);
							}
							)}
						</Grid>

						<br/>

						{
							!isCompSelected
							? null
							: <><CompPanel compSelected={compSelected} /><br/><br/></>
						}
						
						</DisplayPanel>
					</Box>
					
					{/* Down Arrow */}
					<AnimatedBox sx={{textAlign: 'center'}}>
							<Typography>
								<KeyboardArrowDownIcon sx={{height:100}}/>
							</Typography>
					</AnimatedBox>

					{/* Education */}
					<DisplayPanel style={{...compAnimationForCompCard}}>
						<Typography variant="h2">
							Academic Background
						</Typography>
						<Typography variant="subtitle1" color={theme.palette.text.disabled}>
							Swansea University | October 2017 – June 2021
						</Typography>
						<br />
						<Grid container spacing={0.1} sx={{width:'90%'}}>
							<Grid item xs={12} >
								<OutlinedPaper>
								<Typography variant="subtitle2" color={theme.palette.text.disabled}>
									Degree name
								</Typography>
								<Typography variant="h4" sx={{alignContent:'left'}}>
									BSc THEORETICAL PHYSICS
								</Typography>
								</OutlinedPaper>
							</Grid>
							<Grid item xs={3} >
								<OutlinedPaper>
								<Typography variant="subtitle2" color={theme.palette.text.disabled}>
									Award
								</Typography>
								<Typography variant="body1">
									First Class Honors
								</Typography>
								</OutlinedPaper>
							</Grid>
							<Grid item xs={9}>
								{/* <ButtonBase sx={{width:'100%', textAlign: 'left'}}> */}
								<AnimatedButton textAlign='left' sx={{width:'99.8%', height:'97.5%'}}
									onClick={() => handleThesisBtnClick()}
									isSelected={isThesisSelected}
								>
								<Typography variant="subtitle2" color={theme.palette.text.disabled}>
									Thesis
								</Typography>
								<Typography variant="body1">
									Demonstrating the derivation, coding and use of a PIMC Simulation
								</Typography>
								</AnimatedButton>
								{/* </ButtonBase> */}
							</Grid>
							<Grid item xs={12}>
								{
									isThesisSelected ? <OutlinedPaper>
									<Typography variant="subtitle2" color={theme.palette.text.disabled}>
										Description
									</Typography>
									
										<Typography variant="body1">
											My thesis outlines Feynman’s path integral formulation of quantum dynamics and the challenges of
											solving its infinite dimensional integrals. It then outlines the creation of a python program which uses
											the Metropolis Hastings Algorithm (aka ‘Monte Carlo’ algorithm) to find a numeric approximation of
											various observables of a given system like the vacuum energy or probability density of the system.
											This is done by solving Feynman’s equations using the Euler-Lagrange equation together with the
											Monte Carlo algorithm to minimize the system’s action. It concludes by comparing the accuracy of
											this method with methods like quantum perturbation theory.
										</Typography>
									
									</OutlinedPaper> : null
								}
							</Grid>
							
						</Grid>
						<br />
					</DisplayPanel>
					
					{/* Down Arrow */}
					<AnimatedBox sx={{textAlign: 'center'}}>
							<Typography>
								<KeyboardArrowDownIcon sx={{height:100}}/>
							</Typography>
					</AnimatedBox>

					{/* Contact Info Card */}
					<ContactCard style={{...compAnimationForCompCard}}/>
				
				<Paper/>

			</PageStack>
		</PageBox>
	);
}

const tmpButtonObj = [
	{text:'Full-Stack Development',
		key: 'dev'
	},
	{text:'Teaching & Presentations',
		key: 'teach'
	},
	{text:'Modeling & Optimization',
		key: 'model'
	}
];