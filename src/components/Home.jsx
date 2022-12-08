import { useState } from "react";
import React from 'react'
import lolImage from '../img/lol.png'
import earnRewards from '../img/earn_rewards.png'
import garen from '../img/Garen.jpg'
import ability from '../img/ability.png'
import video from '../img/video_1920x1080.mp4'

const Home = () => {
  return (
    <div>
        {/* Header */}
        <div className="py-20 text-center">
          <h1 className='font-Beaufort_for_LOL italic text-xl md:text-2xl'>WELCOME TO THE RIFT</h1>
          <h1 className='font-Beaufort_for_LOL italic text-6xl md:text-7xl lg:text-8xl'>SUMMONER</h1>
          {/* Heading Paragraph */}
          <div className='font-Spiegel w-full sm:w-[60%] md:w-[50%] lg:w-[50%] xl:w-[40%] mx-auto p-4'>
            <p>There’s a lot to learn about League, so we’ll start with the essentials. Explore the guide below to get the rundown on the most popular game mode.</p>
            <button className="my-8 py-4 px-12 bg-LolGold font-FF_Mark_W05 rounded-md hover:brightness-105">LET'S GO</button>
          </div>

          {/* Video Warriors Youtube */}
          <iframe className="mx-auto p-2 border bg-lolGray rounded-lg w-full h-[300px] md:w-[600px] md:h-[400px]"  src="https://www.youtube.com/embed/aR-KAldshAE" title="Warriors | Season 2020 Cinematic - League of Legends (ft. 2WEI and Edda Hayes)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
        </div>

        {/* Section-1 What is the LOL */}
        <div className="bg-black text-white min-h-[600px] rounded-lg">
          <h1 className='font-Beaufort_for_LOL italic text-3xl md:text-4xl lg:text-6xl pt-20 text-center'>WHAT IS LEAGUE OF LEGENDS ?</h1>
            {/* Heading Paragraph */}
            <div className='font-Spiegel w-full sm:w-[70%] md:w-[70%] lg:w-[70%] xl:w-[50%] mx-auto p-4 text-center'>
              <p>League of Legends is a team-based strategy game where two teams of five powerful champions face off to destroy the other’s base. Choose from over 140 champions to make epic plays, secure kills, and take down towers as you battle your way to victory.</p>
            </div>
            {/* Image */}
            <img src={lolImage} alt="lol-main" title="League of Legends" className="mx-auto mt-8 p-4" />

            {/* Game Info */}
            <div className="py-20 px-4 xl:px-20">
              <h1 className='font-Beaufort_for_LOL italic text-3xl md:text-4xl'>DESTROY THE BASE</h1>
              <p className="font-Spiegel py-4 w-full md:w-[50%] lg:w-[30%]">The Nexus is the heart of both teams’ bases. Destroy the enemy’s Nexus first to win the game.</p>

              <h1 className='font-Beaufort_for_LOL italic text-3xl md:text-4xl pt-4'>CLEAR THE PATH</h1>
              <p className="font-Spiegel py-4 w-full md:w-[50%] lg:w-[30%]">Your team needs to clear at least one lane to get to the enemy Nexus. Blocking your path are defense structures called turrets and inhibitors. Each lane has three turrets and one inhibitor, and each Nexus is guarded by two turrets.</p>

              <h1 className='font-Beaufort_for_LOL italic text-3xl md:text-4xl pt-4'>TAKE ON THE JUNGLE</h1>
              <p className="font-Spiegel py-4 w-full md:w-[50%] lg:w-[30%]">In between the lanes is the jungle, where neutral monsters and jungle plants reside. The two most important monsters are Baron Nashor and the Drakes. Killing these units grants unique buffs for your team and can also turn the tide of the game.</p>

              <h1 className='font-Beaufort_for_LOL italic text-3xl md:text-4xl pt-4'>CHOOSE YOUR LANE</h1>
              <p className="font-Spiegel py-4 w-full md:w-[50%] lg:w-[30%]">There are five positions that make up the recommended team comp for the game. Each lane lends itself to certain kinds of champions and roles—try them all or lock in to the lane that calls you.</p>

              <h1 className='font-Beaufort_for_LOL italic text-3xl md:text-4xl pt-4'>WIN A GAME</h1>
              <p className="font-Spiegel py-4 w-full md:w-[50%] lg:w-[30%]">The Nexus is the heart of both teams’ bases. Destroy the enemy’s Nexus first to win the game.</p>
            </div>
        </div>

        {/* Section-2 */}
        <div className="pt-20">
            <h1 className='font-Beaufort_for_LOL italic text-3xl md:text-5xl xl:text-7xl text-center'>POWER UP YOUR CHAMP</h1>
            <p className="font-Spiegel w-full sm:w-[80%] md:w-[50%] lg:w-[50%] xl:w-[40%] mx-auto p-4 text-center">Champions get stronger by earning experience to level up and gold to buy more powerful items as the game progresses. Staying on top of these two factors is crucial to overpowering the enemy team and destroying their base.</p>
            <img className="mx-auto p-4 sm:w-[80%] md:w-[60%]" src={garen} alt="champion" />
        </div>

        {/* Section-3 */}
        <div className="pt-20">
            <h1 className='font-Beaufort_for_LOL italic text-3xl md:text-5xl xl:text-7xl text-center'>UNLOCK YOUR ABILITIES</h1>
            <p className="font-Spiegel w-full sm:w-[80%] md:w-[50%] lg:w-[50%] xl:w-[40%] mx-auto p-4 text-center">Champions have five core abilities, two special spells, and up to seven items at a time. Figuring out the optimal ability order, summoner spells, and item build for your champion will help you succeed as a team.</p>
            <img className="mx-auto" src={ability} alt="ability" />
        </div>

        {/* Section-4 */}
        <div className="py-20">
            <h1 className='font-Beaufort_for_LOL italic text-3xl md:text-5xl xl:text-7xl text-center'>EARN REWARDS</h1>
            <img className="mx-auto" src={earnRewards} alt="rewards" />
        </div>

        {/* Section-5 Video */}
        <div>
          <video data-testid="download:video" autoplay="autoplay" loop playsinline className="mx-auto">
            <source src={video} type='video/mp4' />
          </video>
        </div>
    </div>
  )
}

export default Home