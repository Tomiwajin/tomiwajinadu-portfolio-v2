"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Gamepad2, Headphones, BookOpen, Dumbbell, Coffee, ArrowLeft, Send } from "lucide-react";

const hobbies = [
  {
    id: 1,
    icon: Code2,
    title: "Coding Projects",
    lastMessage: "Just shipped a new feature!",
    time: "2h",
    color: "from-blue-500 to-cyan-500",
    unread: true,
    conversation: [
      { sender: "them", text: "Hey! What are you working on these days?", time: "10:32 AM" },
      { sender: "me", text: "Building a job tracker app with Next.js and AI integration", time: "10:35 AM" },
      { sender: "them", text: "That sounds cool! What tech stack?", time: "10:36 AM" },
      { sender: "me", text: "Next.js 15, TypeScript, Tailwind, and Hugging Face models", time: "10:38 AM" },
      { sender: "them", text: "Love it! Always exploring new tech 🚀", time: "10:40 AM" },
      { sender: "me", text: "Just shipped a new feature!", time: "12:15 PM" },
    ],
  },
  {
    id: 2,
    icon: Gamepad2,
    title: "Gaming",
    lastMessage: "Started a new RPG campaign",
    time: "5h",
    color: "from-purple-500 to-pink-500",
    unread: false,
    conversation: [
      { sender: "them", text: "What games are you into right now?", time: "Yesterday" },
      { sender: "me", text: "Been grinding competitive Valorant and playing some indie RPGs", time: "Yesterday" },
      { sender: "them", text: "Rank?", time: "Yesterday" },
      { sender: "me", text: "Diamond 2, trying to hit Ascendant", time: "Yesterday" },
      { sender: "them", text: "Nice! What about single player?", time: "8:20 AM" },
      { sender: "me", text: "Started a new RPG campaign", time: "9:45 AM" },
    ],
  },
  {
    id: 3,
    icon: Headphones,
    title: "Music",
    lastMessage: "Check out this new playlist",
    time: "1d",
    color: "from-indigo-500 to-purple-500",
    unread: true,
    conversation: [
      { sender: "them", text: "What's your current music vibe?", time: "2 days ago" },
      { sender: "me", text: "Been into lofi hip hop for coding sessions", time: "2 days ago" },
      { sender: "them", text: "Any favorite artists?", time: "2 days ago" },
      { sender: "me", text: "Nujabes, J Dilla, and a lot of synthwave lately", time: "2 days ago" },
      { sender: "them", text: "Synthwave is perfect for coding", time: "Yesterday" },
      { sender: "me", text: "Check out this new playlist", time: "Yesterday" },
    ],
  },
  {
    id: 4,
    icon: BookOpen,
    title: "Reading",
    lastMessage: "Just finished another tech book",
    time: "2d",
    color: "from-orange-500 to-red-500",
    unread: false,
    conversation: [
      { sender: "them", text: "What are you reading?", time: "3 days ago" },
      { sender: "me", text: "Finishing up 'Designing Data-Intensive Applications'", time: "3 days ago" },
      { sender: "them", text: "That's a beast of a book!", time: "3 days ago" },
      { sender: "me", text: "Yeah but so worth it. Learning a ton about distributed systems", time: "3 days ago" },
      { sender: "them", text: "What's next on the list?", time: "2 days ago" },
      { sender: "me", text: "Just finished another tech book", time: "2 days ago" },
    ],
  },
  {
    id: 5,
    icon: Dumbbell,
    title: "Fitness",
    lastMessage: "Hit a new PR today 💪",
    time: "3d",
    color: "from-green-500 to-emerald-500",
    unread: false,
    conversation: [
      { sender: "them", text: "How's the gym routine going?", time: "4 days ago" },
      { sender: "me", text: "Switched to a PPL split, loving it", time: "4 days ago" },
      { sender: "them", text: "Push Pull Legs?", time: "4 days ago" },
      { sender: "me", text: "Yep! 6 days a week", time: "4 days ago" },
      { sender: "them", text: "That's commitment 🔥", time: "3 days ago" },
      { sender: "me", text: "Hit a new PR today 💪", time: "3 days ago" },
    ],
  },
  {
    id: 6,
    icon: Coffee,
    title: "Coffee Culture",
    lastMessage: "Found an amazing new café",
    time: "1w",
    color: "from-amber-500 to-orange-500",
    unread: false,
    conversation: [
      { sender: "them", text: "Still on the coffee grind?", time: "1 week ago" },
      { sender: "me", text: "Always! Just got a new pour-over setup", time: "1 week ago" },
      { sender: "them", text: "Fancy! What beans are you using?", time: "1 week ago" },
      { sender: "me", text: "Ethiopian light roast from a local roaster", time: "1 week ago" },
      { sender: "them", text: "The fruity notes must be amazing", time: "1 week ago" },
      { sender: "me", text: "Found an amazing new café", time: "1 week ago" },
    ],
  },
];

const Page = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [isMobileView, setIsMobileView] = useState(false);

  const selected = hobbies.find((h) => h.id === selectedChat);

  return (
    <div className="md:pl-70 flex flex-col h-[calc(100vh-100px)] animate-fade-in">
      {/* Header */}
      <div className="flex flex-col gap-2 mb-4 px-4 md:px-0">
        <h1 className="text-2xl md:text-3xl font-bold">Interests</h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Chat about my hobbies
        </p>
      </div>

      {/* Instagram DM Style Container */}
      <div className="flex-1 border border-theme rounded-2xl overflow-hidden flex bg-background">
        {/* Chat List - Left Sidebar */}
        <div
          className={`${
            selectedChat && isMobileView ? "hidden" : "flex"
          } w-full md:w-96 border-r border-theme flex-col`}
        >
          {/* Chats List */}
          <div className="flex-1 overflow-y-auto">
            {hobbies.map((hobby) => (
              <div
                key={hobby.id}
                onClick={() => {
                  setSelectedChat(hobby.id);
                  setIsMobileView(true);
                }}
                className="flex items-center gap-3 p-4 hover:bg-hover cursor-pointer border-b border-theme transition-colors"
              >
                {/* Avatar with gradient ring */}
                <div className="relative flex-shrink-0">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${hobby.color} rounded-full ${
                      hobby.unread ? "p-[2px]" : "p-0"
                    }`}
                  />
                  <div className="relative bg-background rounded-full p-3">
                    <hobby.icon className="w-6 h-6 text-indigo-500" />
                  </div>
                </div>

                {/* Chat Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3
                      className={`text-sm ${
                        hobby.unread ? "font-bold" : "font-normal"
                      } truncate`}
                    >
                      {hobby.title}
                    </h3>
                    <span className="text-xs text-gray-500">{hobby.time}</span>
                  </div>
                  <p
                    className={`text-xs ${
                      hobby.unread
                        ? "font-semibold text-foreground"
                        : "text-gray-500"
                    } truncate`}
                  >
                    {hobby.lastMessage}
                  </p>
                </div>

                {/* Unread indicator */}
                {hobby.unread && (
                  <div className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Conversation View - Right Side */}
        <div
          className={`${
            !selectedChat || !isMobileView ? "hidden md:flex" : "flex"
          } flex-1 flex-col`}
        >
          {selected ? (
            <>
              {/* Chat Header */}
              <div className="flex items-center justify-between gap-3 p-4 border-b border-theme">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setSelectedChat(null);
                      setIsMobileView(false);
                    }}
                    className="md:hidden hover:bg-hover p-2 rounded-full"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${selected.color} rounded-full`}
                    />
                    <div className="relative bg-background rounded-full p-2">
                      <selected.icon className="w-5 h-5 text-indigo-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{selected.title}</h3>
                    <p className="text-xs text-gray-500">Active now</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedChat(null)}
                  className="hidden md:block hover:bg-hover p-2 rounded-full transition-colors"
                  title="Close chat"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {selected.conversation.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`flex ${
                      msg.sender === "me" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[70%] ${
                        msg.sender === "me"
                          ? "bg-indigo-500 text-white"
                          : "bg-hover text-foreground"
                      } rounded-3xl px-4 py-2`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          msg.sender === "me"
                            ? "text-indigo-200"
                            : "text-gray-500"
                        }`}
                      >
                        {msg.time}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-theme">
                <div className="flex items-center gap-2 border border-theme rounded-full px-4 py-2">
                  <input
                    type="text"
                    placeholder="Message..."
                    className="flex-1 bg-transparent outline-none text-sm"
                    disabled
                  />
                  <button className="text-indigo-500 hover:scale-110 transition-transform">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 text-center mt-2">
                  This is a preview - messages are pre-written
                </p>
              </div>
            </>
          ) : (
            <div className="hidden md:flex flex-1 items-center justify-center text-gray-500">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Your Messages</h3>
                <p className="text-sm">
                  Select a conversation to view my interests
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
