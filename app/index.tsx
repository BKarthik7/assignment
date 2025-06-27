import { EyeOff, Snowflake } from "lucide-react-native";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const CardDetails = () => {
  const [isCardFrozen, setIsCardFrozen] = useState(false);

  const toggleFreeze = () => setIsCardFrozen(!isCardFrozen);

  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>select payment mode</Text>
          <Text style={styles.headerSubtitle}>
            choose your preferred payment method to make payment.
          </Text>
        </View>

        {/* Curved Tab Navigation */}
        <View style={styles.tabNav}>
          <View style={styles.tabButtons}>
            <TouchableOpacity>
              <Text style={styles.tabInactive}>pay</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.tabActive}>card</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Card Label */}
        <View style={styles.cardLabel}>
          <Text style={styles.cardLabelText}>YOUR DIGITAL DEBIT CARD</Text>
        </View>

        {/* Main Card */}
        <View style={styles.mainCardContainer}>
          <View style={styles.mainCard}>
            {/* Card Background */}
            {!isCardFrozen ? (
              <Image
              source={require("../assets/images/dimcard.png")}
              style={[StyleSheet.absoluteFill, { width: "100%", height: "100%" }]}
              resizeMode="stretch"
              />
            ) : (
              <Image
              source={require("../assets/images/card.png")}
              style={[StyleSheet.absoluteFill, { width: "100%", height: "100%", zIndex: 10 }]}
              resizeMode="stretch"
              />
            )}
            {/* Expiry */}
            <View style={styles.expirySection}>
              <Text style={styles.expiryLabel}>expiry</Text>
              <Text style={styles.expiryValue}>01/28</Text>
            </View>
            {/* CVV */}
            <View style={styles.cvvSection}>
              <Text style={styles.cvvLabel}>cvv</Text>
              <View style={styles.cvvRow}>
                  <Text style={styles.cvvText}>***</Text>
                {/* <View style={styles.cvvIcon}>
                  <EyeOff color="#a90808" size={24} />
                </View> */}
              </View>
            </View>
          </View>
        </View>

        {/* Freeze Card Section */}
        <View style={styles.freezeSection}>
          <TouchableOpacity
            onPress={toggleFreeze}
            style={[
              styles.freezeButton,
              isCardFrozen ? styles.freezeButtonActive : styles.freezeButtonInactive,
            ]}
          >
            <Snowflake color={isCardFrozen ? "#a90808" : "#fff"} size={20} />
          </TouchableOpacity>
          <Text style={[styles.freezeText, isCardFrozen && styles.freezeTextActive, { color: isCardFrozen ? '#a90808' : '#fff' }]}>
            {isCardFrozen ? "unfreeze" : "freeze"}
          </Text>
        </View>

        {/* Bottom Navigation */}
        <View style={styles.bottomNavWrapper}>
          {/* Curved Navigation Background */}
          <Image 
            source={require("../assets/images/bottomnav.png")}
            style={[StyleSheet.absoluteFill, { width: "100%", height: "100%", zIndex: 0 }]}
            resizeMode="stretch"
          />
          
          {/* Navigation Items */}
          <View style={styles.bottomNavItems}>
            {/* Home Button */}
            <TouchableOpacity style={styles.bottomNavButtonInactive}>
              <View style={styles.bottomNavIconInactive}>
                <Image
                  source={require("../assets/images/home.png")}
                  style={styles.bottomNavImageIcon}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.bottomNavTextInactive}>home</Text>
            </TouchableOpacity>
            {/* Yolo Pay Button (Active) */}
            <TouchableOpacity style={styles.bottomNavButtonActive}>
              <View style={styles.bottomNavIconActive}>
                <Image
                  source={require("../assets/images/yolo.png")}
                  style={styles.bottomNavImageIcon}
                />
              </View>
              <Text style={styles.bottomNavTextActive}>yolo pay</Text>
            </TouchableOpacity>
            {/* Ginie Button */}
            <TouchableOpacity style={styles.bottomNavButtonInactive}>
              <View style={styles.bottomNavIconInactive}>
                <Image
                  source={require("../assets/images/ginie.png")}
                  style={styles.bottomNavImageIcon}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.bottomNavTextInactive}>ginie</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
    alignItems: "center",
    justifyContent: "center",
  },
  cardWrapper: {
    width: 360,
    height: 828,
    backgroundColor: "#0d0d0d",
    borderRadius: 16,
    overflow: "hidden",
    position: "relative",
  },
  statusBar: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    zIndex: 50,
  },
  statusTime: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
  statusIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusIcon: {
    width: 17,
    height: 10,
    backgroundColor: "#fff",
    borderRadius: 2,
    opacity: 0.8,
    marginRight: 2,
  },
  statusIconLarge: {
    width: 24,
    height: 11,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 2,
    opacity: 0.8,
  },
  header: {
    position: "absolute",
    top: 63,
    left: 16,
    right: 16,
  },
  headerTitle: {
    fontFamily: "Poppins",
    fontWeight: "800",
    color: "#fff",
    fontSize: 24,
    lineHeight: 29,
    letterSpacing: -0.17,
    marginBottom: 16,
  },
  headerSubtitle: {
    opacity: 0.5,
    fontFamily: "Poppins",
    fontWeight: "400",
    color: "#fff",
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: -0.17,
  },
  tabNav: {
    position: "absolute",
    top: 160,
    left: 16,
    right: 16,
    height: 60,
    justifyContent: "center",
  },
  tabButtons: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 64,
  },
  tabInactive: {
    fontFamily: "Poppins",
    fontWeight: "400",
    color: "#fff",
    fontSize: 16,
    letterSpacing: -0.17,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 40,
  },
  tabActive: {
    fontFamily: "Poppins",
    fontWeight: "600",
    color: "#a90808",
    fontSize: 16,
    letterSpacing: -0.17,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "#a90808",
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 40,
  },
  tabUnderline: {
    position: "absolute",
    bottom: -8,
    left: "50%",
    marginLeft: -16,
    width: 32,
    height: 2,
    backgroundColor: "#a90808",
    borderRadius: 8,
  },
  cardLabel: {
    position: "absolute",
    top: 270,
    left: 16,
  },
  cardLabelText: {
    opacity: 0.2,
    fontFamily: "Poppins",
    fontWeight: "500",
    color: "#fff",
    fontSize: 12,
    letterSpacing: -0.17,
    textTransform: "uppercase",
  },
  mainCardContainer: {
    position: "absolute",
    top: 304,
    left: 16,
  },
  mainCard: {
    width: 186,
    height: 296,
    borderRadius: 24,
    overflow: "hidden",
    backgroundColor: "#222",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.7,
    shadowRadius: 74,
    elevation: 10,
  },
  frozenBg: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#222",
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  freezeOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(59,130,246,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  freezeIcon: {
    alignSelf: "center",
  },
  cardChip: {
    position: "absolute",
    top: 9,
    right: 30,
    width: 48,
    height: 21,
    borderRadius: 4,
    backgroundColor: "#ffd700",
  },
  bankLogo: {
    position: "absolute",
    top: 13,
    left: 19,
    width: 48,
    height: 15,
    borderRadius: 2,
    backgroundColor: "rgba(255,255,255,0.3)",
  },
  cardNumberSection: {
    position: "absolute",
    top: 76,
    left: 14,
    flexDirection: "column",
    gap: 10,
  },
  cardNumberBox: {
    width: 54,
    height: 40,
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
    marginBottom: 10,
  },
  cardNumberText: {
    color: "#fff",
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: 14,
    letterSpacing: 1,
  },
  expirySection: {
    position: "absolute",
    top: 69,
    left: 94,
    zIndex: 8,
  },
  expiryLabel: {
    opacity: 0.5,
    fontFamily: "Poppins",
    fontWeight: "400",
    color: "#fff",
    fontSize: 10,
    letterSpacing: -0.17,
    textTransform: "uppercase",
  },
  expiryValue: {
    fontFamily: "Poppins",
    fontWeight: "400",
    color: "#fff",
    fontSize: 14,
    letterSpacing: -0.17,
    marginTop: 4,
  },
  cvvSection: {
    position: "absolute",
    top: 135,
    left: 94,
    zIndex: 8,
  },
  cvvLabel: {
    opacity: 0.5,
    fontFamily: "Poppins",
    fontWeight: "400",
    color: "#fff",
    fontSize: 10,
    letterSpacing: -0.17,
    textTransform: "uppercase",
  },
  cvvRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  cvvText: {
    color: "#fff",
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: 28,
  },
  cvvIcon: {
    width: 30,
    height: 30,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  copyButton: {
    position: "absolute",
    top: 205,
    left: 39,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  copyButtonText: {
    fontFamily: "Poppins",
    fontWeight: "500",
    color: "#a90808",
    fontSize: 12,
    letterSpacing: -0.17,
  },
  cardBrandLogo: {
    position: "absolute",
    bottom: 34,
    right: 105,
    width: 71,
    height: 34,
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  freezeSection: {
    position: "absolute",
    top: 390,
    right: 90,
    alignItems: "center",
  },
  freezeButton: {
    width: 58,
    height: 58,
    borderRadius: 29,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    marginBottom: 8,
  },
  freezeButtonActive: {
    borderColor: "rgba(96,165,250,0.5)",
    shadowColor: "#3b82f6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  freezeButtonInactive: {
    backgroundColor: "rgba(0,0,0,0.2)",
    borderColor: "rgba(255,255,255,0.1)",
  },
  freezeText: {
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: 12,
    letterSpacing: -0.17,
    marginTop: 8,
    color: "#fff",
  },
  freezeTextActive: {
    color: "#a90808",
  },
  bottomNavWrapper: {
    position: "absolute",
    bottom: -15,
    left: 0,
    width: 360,
    height: 108,
    justifyContent: "flex-end",
  },
  bottomNavItems: {
    position: "absolute",
    bottom: 30,
    left: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },
  bottomNavButtonInactive: {
    alignItems: "center",
    opacity: 0.3,
    bottom: -20
  },
  bottomNavButtonActive: {
    alignItems: "center",
    transform: [{ scale: 1.05 }],
    top: 20
  },
  bottomNavIconInactive: {
    width: 41,
    height: 41,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 20.5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
    bottom: 10
  },
  bottomNavIconActive: {
    width: 41,
    height: 41,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 20.5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
    bottom: 20
  },
  bottomNavYoloBox: {
    width: 22,
    height: 22,
    backgroundColor: "#fff",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  bottomNavYoloInnerBox: {
    width: 16,
    height: 16,
    backgroundColor: "#a90808",
    borderRadius: 2,
  },
  bottomNavYoloOverlay1: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 25.5,
    backgroundColor: "rgba(255,255,255,0.2)",
    opacity: 0.7,
  },
  bottomNavYoloOverlay2: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 25.5,
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  bottomNavTextInactive: {
    fontFamily: "Poppins",
    fontWeight: "500",
    color: "#fff",
    fontSize: 12,
    letterSpacing: -0.17,
    marginTop: 8,
    bottom: 10
  },
  bottomNavTextActive: {
    fontFamily: "Poppins",
    fontWeight: "500",
    color: "#fff",
    fontSize: 12,
    letterSpacing: -0.17,
    marginTop: 8,
    bottom: 20
  },
  bottomNavImageIcon: {
    width: 40,
    height: 40,
    zIndex: 10,
  },
});

export default CardDetails;