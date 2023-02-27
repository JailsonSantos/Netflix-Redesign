import React, { useEffect, useState } from 'react'
import { onCurrentUserSubscriptionUpdate, Subscription } from '@stripe/firestore-stripe-payments'
import { User } from 'firebase/auth';
import payments from '@/lib/stipe';

function useSubscription(user: User | null) {
  const [subscription, setSubscription] = useState<Subscription>()

  useEffect(() => {
    if (!user) return;

    onCurrentUserSubscriptionUpdate(payments, (snapshot) => {
      setSubscription(snapshot.subscriptions.filter(
        (subscription) =>
          subscription.status === 'active' ||
          subscription.status === 'trialing'
      )[0]
      );
    });
  }, [user]);

  return subscription;
}

export default useSubscription
