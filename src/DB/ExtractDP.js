export default function ExtractDPFromEmail(email) {
  const dp = email.split('@')[0].split('.').join(' ');
  
  return dp;
}