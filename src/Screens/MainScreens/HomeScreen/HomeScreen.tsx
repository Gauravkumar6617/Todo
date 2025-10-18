import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";

// Mock data and icons (replace with real imports/data)
const MOCK_TASKS = [
  {
    id: "1",
    title: "Finish Landing Page Design",
    time: "9:00 AM",
    category: "Design",
    color: "#6A5ACD",
  }, // SlateBlue
  {
    id: "2",
    title: "Review PRs for Backend",
    time: "11:00 AM",
    category: "Code",
    color: "#1E90FF",
  }, // DodgerBlue
  {
    id: "3",
    title: "Buy groceries for dinner",
    time: "3:00 PM",
    category: "Personal",
    color: "#FF4500",
  }, // OrangeRed
];

const MockProfileIcon = () => (
  <Text style={{ fontSize: 28, color: "#333", marginRight: 10 }}>👤</Text>
);
const MockNotificationIcon = () => (
  <Text style={{ fontSize: 24, color: "#FFFFFF" }}>🔔</Text>
);
const MockAIIcon = () => (
  <Text style={{ fontSize: 24, color: "#FFFFFF" }}>✨</Text>
);
const MockPlusIcon = () => (
  <Text style={{ fontSize: 32, color: "#FFFFFF" }}>+</Text>
);

// Assuming styles is imported from './style'
import styles from "./style";

const HomeScreen: React.FC = () => {
  // Replace with dynamic user data
  const userName = "Suraj";

  const handleCreateTask = () => {
    console.log("Navigating to task creation screen...");
    // navigation.navigate('TaskCreate');
  };

  const handleAIPrompt = () => {
    console.log("Opening AI task generation modal...");
    // navigation.navigate('AIPrompt');
  };

  // A simple component to render each task item
  const TaskItem = ({ title, time, category, color }) => (
    <View style={styles.taskCardContainer}>
      <View style={[styles.taskIndicator, { backgroundColor: color }]} />
      <View style={{ flex: 1 }}>
        <Text style={styles.taskTitle}>{title}</Text>
        <Text style={styles.taskCategory}>{category}</Text>
      </View>
      <Text style={styles.taskTime}>{time}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={styles.headerBackground.backgroundColor}
      />

      {/* --- Curved Header Banner --- */}
      <View style={styles.headerBackground}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.greetingText}>Hi {userName},</Text>
            <Text style={styles.headerSubtitle}>5 tasks pending today</Text>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <MockNotificationIcon />
            </TouchableOpacity>
            <Image
              source={{ uri: "https://placehold.co/40x40/B0E0E6/000?text=P" }} // Replace with actual profile image
              style={styles.profileImage}
            />
          </View>
        </View>
      </View>

      {/* --- Main Content Scroll View --- */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* --- AI Feature Banner/Card --- */}
        <View style={styles.aiCard}>
          <View style={styles.aiCardLeft}>
            <MockAIIcon />
          </View>
          <View style={styles.aiCardMiddle}>
            <Text style={styles.aiCardTitle}>Generate Task List with AI</Text>
            <Text style={styles.aiCardSubtitle}>
              Tell the AI what you need to achieve.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.aiCardButton}
            onPress={handleAIPrompt}
          >
            <Text style={styles.aiCardButtonText}>GO</Text>
          </TouchableOpacity>
        </View>

        {/* --- Tasks Header --- */}
        <View style={styles.taskListHeader}>
          <Text style={styles.taskListTitle}>My Tasks</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>

        {/* --- Task List --- */}
        <View style={styles.taskList}>
          {MOCK_TASKS.map((task) => (
            <TaskItem key={task.id} {...task} />
          ))}
        </View>
      </ScrollView>

      {/* --- Floating Action Button (FAB) --- */}
      <TouchableOpacity style={styles.fab} onPress={handleCreateTask}>
        <MockPlusIcon />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
