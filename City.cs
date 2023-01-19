namespace Weather_Application
{
    public class City
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public string? Region { get; set; }
        public string? Country { get; set; }
        public float Lat { get; set; }
        public float Lon { get; set; }
        public string? Url { get; set; }
    }
}

