export async function subscribeUser(
  venueId: string
) {
  const registration =
    await navigator.serviceWorker.ready;

  const subscription =
    await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey:
        process.env
          .NEXT_PUBLIC_VAPID_PUBLIC_KEY!
    });

  await fetch(
    "/api/save-subscription",
    {
      method: "POST",
      body: JSON.stringify({
        venueId,
        subscription
      })
    }
  );
}
