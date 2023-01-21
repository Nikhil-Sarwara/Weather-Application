namespace Weather_Application
{
    public class Condition
    {
        public Condition(string text, string icon, string code)
        {
            Text = text;
            Icon = icon;
            Code = code;
        }

        public string Text { get; set; }
        public string Icon { get; set; }
        public string Code { get; set; }
    }
}

